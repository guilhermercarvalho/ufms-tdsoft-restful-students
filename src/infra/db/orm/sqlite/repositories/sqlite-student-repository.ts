import {
  AddStudentRepository,
  LoadStudentsRepository
} from '@/data/repositories';
import { SQLiteStudentEntity } from '@/infra/db/orm/sqlite/entities';

import { DataSource } from 'typeorm';

export class SQLiteStudentRepository
  implements AddStudentRepository, LoadStudentsRepository
{
  constructor(private readonly dataSource: DataSource) {}

  async add(
    data: AddStudentRepository.Params
  ): Promise<AddStudentRepository.Result> {
    const { rga, name, course, status } = data;
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

  // async getAllStudentsPaged(
  //   page?: number,
  //   take?: number
  // ): Promise<PaginationModel> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const queryBuilder = repository.createQueryBuilder('student');

  //   const queryResult = await PaginationHelper.getQueryPagedTypeorm(
  //     queryBuilder,
  //     page,
  //     take
  //   );

  //   return PaginationHelper.getPage(
  //     queryResult.page,
  //     queryResult.take,
  //     queryResult.itemCount,
  //     queryResult.entities
  //   );
  // }

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

  // async getStudentsByNamePaged(
  //   name: string,
  //   page?: number,
  //   take?: number
  // ): Promise<PaginationModel> {
  //   const repository = this.dataSource.getRepository(SQLiteStudentEntity);
  //   const queryBuilder = repository
  //     .createQueryBuilder('student')
  //     .where('LOWER(student.name) like :name', {
  //       name: `%${name.toLocaleLowerCase()}%`
  //     });

  //   const queryResult = await PaginationHelper.getQueryPagedTypeorm(
  //     queryBuilder,
  //     page,
  //     take
  //   );

  //   return PaginationHelper.getPage(
  //     queryResult.page,
  //     queryResult.take,
  //     queryResult.itemCount,
  //     queryResult.entities
  //   );
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
