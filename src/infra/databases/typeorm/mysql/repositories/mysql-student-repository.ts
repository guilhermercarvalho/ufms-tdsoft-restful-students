import { NotFoundError } from 'core/error';
import { PaginationModel, StudentModel } from 'core/models';
import { StudentRepository } from 'core/repositories/student-repository';
import { PaginationHelper } from 'infra/databases/helpers/pagination-helper';
import { DataSource } from 'typeorm';
import { MySQLStudentEntity } from '../entities';

export class MySQLStudentRepository implements StudentRepository {
  constructor(private readonly dataSource: DataSource) {}

  async getAllStudents(): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const students = await repository
      .createQueryBuilder('student')
      .cache('all_students')
      .getMany();

    return students;
  }

  async getAllStudentsPaged(
    page?: number,
    take?: number
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    const queryResult = await PaginationHelper.getQueryPagedTypeorm(
      queryBuilder,
      page,
      take
    );

    queryBuilder.cache('all_students');

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      queryResult.entities
    );
  }

  async getStudentsByName(name: string): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const { entities } = await repository
      .createQueryBuilder('student')
      .where('LOWER(student.name) like :name', {
        name: `%${name.toLocaleLowerCase()}%`
      })
      .cache('all_students_by_name')
      .getRawAndEntities();

    return entities;
  }

  async getStudentsByNamePaged(
    name: string,
    page?: number,
    take?: number
  ): Promise<PaginationModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const queryBuilder = repository.createQueryBuilder('student');

    queryBuilder.where('LOWER(student.name) like :name', {
      name: `%${name.toLocaleLowerCase()}%`
    });

    const queryResult = await PaginationHelper.getQueryPagedTypeorm(
      queryBuilder,
      page,
      take
    );

    queryBuilder.cache('all_students_by_name');

    return PaginationHelper.getPage(
      queryResult.page,
      queryResult.take,
      queryResult.itemCount,
      queryResult.entities
    );
  }

  async getOneStudent(id: string): Promise<StudentModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const student = await repository
      .createQueryBuilder('student')
      .where({ id })
      .cache('one_student')
      .getOne();

    if (!student) throw new NotFoundError(id);

    return student;
  }

  async createOneStudent(
    name: string,
    rga: string,
    course: string,
    status?: string
  ): Promise<StudentModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    let student = await repository.findOne({
      where: [{ rga }, { name, rga, course }]
    });

    if (student) throw new Error('Student already exists.');

    await this.clearCache();

    student = repository.create({ name, rga, course, status });

    await repository.save(student);

    return student;
  }

  async updateOneStudent(
    id: string,
    name?: string,
    rga?: string,
    course?: string,
    status?: string
  ): Promise<StudentModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const student = await repository.findOneBy({ id });

    if (!student) throw new NotFoundError(id);

    await this.clearCache();

    if (name) student.name = name;
    if (rga) student.rga = rga;
    if (course) student.course = course;
    if (status) student.status = status;

    await repository.save(student);

    return student;
  }

  async deleteOneStudent(id: string): Promise<StudentModel> {
    const repository = this.dataSource.getRepository(MySQLStudentEntity);
    const student = await repository.findOneBy({ id });

    if (!student) throw new NotFoundError(id);

    await this.clearCache();

    await repository.delete(student);

    return student;
  }

  private async clearCache() {
    this.dataSource.queryResultCache?.remove([
      'all_students',
      'all_students_by_name',
      'one_student'
    ]);
  }
}
