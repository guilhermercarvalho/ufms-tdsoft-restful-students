import { IGetAllStudents } from '../../domain/use-cases';
import { IStudentRepository } from '../contracts/repository/student-repository';
import { StudentModel } from '../models';

export class GetAllStudentsService implements IGetAllStudents {
  constructor(private repository: IStudentRepository) {
    this.repository = repository;
  }

  getAllStudents(): Promise<StudentModel[]> {
    return this.repository.getAllStudents();
  }
}
