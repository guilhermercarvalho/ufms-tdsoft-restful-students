import { PaginationModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentRepository,
  LoadStudentsByNamePagedRepository,
  LoadStudentsPagedRepository,
  LoadStudentsRepository,
  RemoveStudentRepository,
  UpdateStudentRepository
} from '@/data/repositories';
import {
  LoadStudentsByNamePagedUseCase,
  LoadStudentUseCase
} from '@/domain/use-cases';
import { SQLiteStudentEntity } from '@/infra/db/orm/entities';
import { PaginationHelper } from '@/infra/db/orm/helpers';
import { ItemAlreadyExists, ItemNotFound } from '@/presentation/errors';

import { DataSource } from 'typeorm';

export class SQLiteStudentRepository
  implements
    AddStudentRepository,
    LoadStudentsRepository,
    LoadStudentsPagedRepository,
    LoadStudentsByNamePagedRepository,
    RemoveStudentRepository,
    LoadStudentRepository
{
  constructor(private readonly dataSource: DataSource) {}

  async add(
    params: AddStudentRepository.Params
  ): Promise<AddStudentRepository.Result> {
    const { rga, name, course, status } = params;
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);

    let student = await repository.findOne({
      where: [{ rga }, { name, rga, course }]
    });

    if (student) throw new ItemAlreadyExists('Student');

    await this.clearCache();

    student = repository.create({ name, rga, course, status });

    await repository.save(student);

    return student;
  }

  async update(
    params: UpdateStudentRepository.Params
  ): Promise<UpdateStudentRepository.Result> {
    const { id, name, course, status } = params;
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);

    const student = await repository.findOneBy({ id });

    if (!student) throw new ItemNotFound('Student');

    await this.clearCache();

    student.name = name || student.name;
    student.course = course || student.course;
    student.status = status || student.status;

    await repository.save(student);

    return student;
  }

  async remove(
    params: RemoveStudentRepository.Params
  ): Promise<RemoveStudentRepository.Result> {
    const { id } = params;
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const student = await repository.findOneBy({ id });

    if (!student) throw new ItemNotFound('Student');

    await this.clearCache();

    await repository.delete(student);

    return student;
  }

  async loadOne(
    params: LoadStudentUseCase.Params
  ): Promise<LoadStudentUseCase.Result> {
    const { id } = params;
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const student = await repository
      .createQueryBuilder('student')
      .where({ id })
      .cache(true)
      .getOne();

    if (!student) throw new ItemNotFound('Student');

    return student;
  }

  async loadAll(): Promise<LoadStudentsRepository.Result> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const students = await repository
      .createQueryBuilder('student')
      .cache(true)
      .getMany();

    return students;
  }

  async loadAllPaged(
    params: LoadStudentsPagedRepository.Params
  ): Promise<LoadStudentsPagedRepository.Result> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    return await PaginationHelper.getPagination(
      queryBuilder,
      params.page,
      params.limit
    );
  }

  async loadAllByNamePaged(
    params: LoadStudentsByNamePagedUseCase.Params
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository
      .createQueryBuilder('student')
      .where('LOWER(student.name) like :name', {
        name: `%${params.name.toLocaleLowerCase()}%`
      });

    return await PaginationHelper.getPagination(
      queryBuilder,
      params.page,
      params.limit
    );
  }

  private async clearCache() {
    this.dataSource.queryResultCache?.clear();
  }
}
