import { PaginationModel, StudentModel } from 'core/models';
import { StudentRepository } from 'core/repositories';
import { PaginationHelper } from 'infra/databases/helpers/pagination-helper';
import { DataSource } from 'typeorm';
import { SQLiteStudentEntity } from '../entities';

export class SQLiteStudentRepository implements StudentRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getAllStudents(): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const students = await repository.find();
    return formatModel(students);
  }

  async getAllStudentsPaged(
    page?: number,
    take?: number
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    const queryResult = await PaginationHelper.getQueryPagedTypeorm(
      queryBuilder,
      page,
      take
    );

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      formatModel(<SQLiteStudentEntity[]>queryResult.entities)
    );
  }

  async getStudentsByName(name: string): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');
    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });
    const { entities } = await queryBuilder.getRawAndEntities();
    return formatModel(entities);
  }

  async getStudentsByNamePaged(
    name: string,
    page?: number,
    take?: number
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });

    const queryResult = await PaginationHelper.getQueryPagedTypeorm(
      queryBuilder,
      page,
      take
    );

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      formatModel(<SQLiteStudentEntity[]>queryResult.entities)
    );
  }

  getOneStudent(id: string): Promise<StudentModel> {
    throw new Error('Not implemented');
  }

  createOneStudent(
    name: string,
    rga: string,
    course: string,
    status?: string
  ): Promise<StudentModel> {
    throw new Error('Not implemented');
  }

  updateOneStudent(
    id: string,
    name?: string,
    rga?: string,
    course?: string,
    status?: string
  ): Promise<StudentModel> {
    throw new Error('Not implemented');
  }
}

function formatModel(students: SQLiteStudentEntity[]): StudentModel[] {
  return students.map((student: SQLiteStudentEntity) => {
    return {
      id: student.id.toString(),
      rga: student.rga,
      name: student.name,
      course: student.course,
      status: student.status,
      registeredIn: student.registeredIn
    };
  });
}
