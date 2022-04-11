import { DataSource } from 'typeorm';
import { IStudentRepository } from '../../../../data/contracts/repository/student-repository';
import { StudentModel } from '../../../../data/models';
import { Student } from '../../../../domain/entities';
import { PostgresStudentEntity } from '../entities/student-entity';

export class PostgresStudentRepository implements IStudentRepository {
  constructor(private readonly dataSource: DataSource) {}
  getStudentById: (stringId: string) => Promise<Student>;

  async getAllStudents(): Promise<StudentModel[]> {
    const repository = this.dataSource.getRepository(PostgresStudentEntity);
    const students = await repository.find();

    return students.map((student) => {
      return {
        id: student.id,
        rga: student.rga,
        name: student.name,
        course: student.course,
        status: student.status,
        registered_in: student.registered_in
      };
    });
  }
}
