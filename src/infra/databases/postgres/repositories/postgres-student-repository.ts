import { PaginationModel, StudentModel } from 'core/models';
import { StudentRepository } from 'core/repositories/student-repository';
import { PaginationHelper } from 'infra/databases/helpers/pagination-helper';
import { DataSource, SelectQueryBuilder } from 'typeorm';
import { PostgresStudentEntity } from '../entities';

export class PostgresStudentRepository implements StudentRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getAllStudents(): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    const students = await repository.find();
    return students;
  }

  async getAllStudentsPaged(
    page: number | undefined,
    take: number | undefined
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    const queryResult = await this.getQueryPaged(page, take, queryBuilder);

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      queryResult.entities
    );
  }

  async getStudentsByName(name: string): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');
    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });
    const { entities } = await queryBuilder.getRawAndEntities();
    return entities;
  }

  async getStudentsByNamePaged(
    name: string,
    page: number | undefined,
    take: number | undefined
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });

    const queryResult = await this.getQueryPaged(page, take, queryBuilder);

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      queryResult.entities
    );
  }

  async createOneStudent(
    name: string,
    rga: string,
    course: string,
    status?: string
  ): Promise<StudentModel> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    let student = await repository.findOne({
      where: [{ rga }, { name, rga, course }]
    });

    if (student) throw new Error('Student already exists.');

    student = repository.create({ name, rga, course, status });

    await repository.save(student);

    return student;
  }

  private async getQueryPaged(
    page: number | undefined,
    take: number | undefined,
    queryBuilder: SelectQueryBuilder<PostgresStudentEntity>
  ): Promise<{
    page: number;
    take: number;
    itemCount: number;
    entities: PostgresStudentEntity[];
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
