import { IStudentDatabaseSource } from '../../database/interfaces/database-sources/student-database-source';
import { IStudentRepository } from '../interfaces/repositories/student-repository';
import { IStudentRequestModel, IStudentResponseModel } from '../models/student';

export class StudentRepository implements IStudentRepository {
  studentDatabaseSource: IStudentDatabaseSource;

  constructor(studentDatabaseSource: IStudentDatabaseSource) {
    this.studentDatabaseSource = studentDatabaseSource;
  }

  async createStudent(student: IStudentRequestModel): Promise<void> {
    await this.studentDatabaseSource.create(student);
  }

  async updateStudent(id: string, data: IStudentRequestModel): Promise<void> {
    await this.studentDatabaseSource.updateOne(id, data);
  }

  async deleteStudent(id: string): Promise<void> {
    await this.studentDatabaseSource.deleteOne(id);
  }

  async getStudent(id: string): Promise<IStudentResponseModel | null> {
    return await this.studentDatabaseSource.getOne(id);
  }

  async getStudents(): Promise<IStudentResponseModel[]> {
    return await this.studentDatabaseSource.getAll();
  }
}
