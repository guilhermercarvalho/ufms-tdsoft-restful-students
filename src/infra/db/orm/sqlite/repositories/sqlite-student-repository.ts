import { PaginationModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentsByNamePagedRepository,
  LoadStudentsRepository
} from '@/data/repositories';
import { LoadStudentsPagedRepository } from '@/data/repositories';
import { LoadStudentsByNamePagedUseCase } from '@/domain/use-cases';
import { PaginationHelper } from '@/infra/db/orm/helpers';
import { SQLiteStudentEntity } from '@/infra/db/orm/entities';

import { DataSource } from 'typeorm';

export class SQLiteStudentRepository
  implements
    AddStudentRepository,
    LoadStudentsRepository,
    LoadStudentsPagedRepository,
    LoadStudentsByNamePagedRepository
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

    if (student) throw new Error('Student already exists.');

    await this.clearCache();

    student = repository.create({ name, rga, course, status });

    await repository.save(student);

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

  // async getStudentsByName(name: string): Promise<StudentModel[]> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const { entities } = await repository
  //     .createQueryBuilder('student')
  //     .where('LOWER(student.name) like :name', {
  //       name: `%${name.toLocaleLowerCase()}%`
  //     })
  //     .cache(true)
  //     .getRawAndEntities();

  //   return entities;
  // }

  // async getOneStudent(id: string): Promise<StudentModel> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const student = await repository
  //     .createQueryBuilder('student')
  //     .where({ id })
  //     .cache(true)
  //     .getOne();

  //   if (!student) throw new NotFoundError(id);

  //   return student;
  // }

  // async updateOneStudent(
  //   id: string,
  //   name?: string,
  //   rga?: string,
  //   course?: string,
  //   status?: string
  // ): Promise<StudentModel> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const student = await repository.findOneBy({ id });

  //   if (!student) throw new NotFoundError(id);

  //   await this.clearCache();

  //   if (name) student.name = name;
  //   if (rga) student.rga = rga;
  //   if (course) student.course = course;
  //   if (status) student.status = status;

  //   await repository.save(student);

  //   return student;
  // }

  // async deleteOneStudent(id: string): Promise<StudentModel> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const student = await repository.findOneBy({ id });

  //   if (!student) throw new NotFoundError(id);

  //   await this.clearCache();

  //   await repository.delete(student);

  //   return student;
  // }

  private async clearCache() {
    this.dataSource.queryResultCache?.clear();
  }
}
