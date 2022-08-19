import { PaginationModel, StudentModel } from 'core/models';
import { StudentRepository } from 'core/repositories';
import { PaginationHelper } from 'infra/databases/helpers/pagination-helper';
import { DataSource, SelectQueryBuilder } from 'typeorm';
import { SQLiteStudentEntity } from '../entities';

export class SQLiteStudentRepository implements StudentRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getAllStudents(): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const students = await repository.find();
    return this.formatModel(students);
  }

  async getAllStudentsPaged(
    page: number | undefined,
    take: number | undefined
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    const queryResult = await this.getQueryPaged(page, take, queryBuilder);

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      this.formatModel(queryResult.entities)
    );
  }

  async getStudentsByName(name: string): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');
    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });
    const { entities } = await queryBuilder.getRawAndEntities();
    return this.formatModel(entities);
  }

  async getStudentsByNamePaged(
    name: string,
    page: number | undefined,
    take: number | undefined
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(SQLiteStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });

    const queryResult = await this.getQueryPaged(page, take, queryBuilder);

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      this.formatModel(queryResult.entities)
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

  private formatModel(students: SQLiteStudentEntity[]): StudentModel[] {
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

  private async getQueryPaged(
    page: number | undefined,
    take: number | undefined,
    queryBuilder: SelectQueryBuilder<SQLiteStudentEntity>
  ): Promise<{
    page: number;
    take: number;
    itemCount: number;
    entities: SQLiteStudentEntity[];
  }> {
    page = page || PaginationHelper.DEFAULT_PAGE;
    take = take || PaginationHelper.DEFAULT_LIMIT;

    const skip = PaginationHelper.getOffset(page, take);
    queryBuilder.skip(skip).take(take);
    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return { page, take, itemCount, entities };
  }
}
