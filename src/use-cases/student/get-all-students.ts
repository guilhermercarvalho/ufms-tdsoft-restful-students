import { IStudentRepository } from '../../domain/interfaces/repositories/student-repository';
import { IGetAllStudentsUseCase } from '../../domain/interfaces/use-cases/get-all-students-use-case';
import { IStudentResponseModel } from '../../domain/models/student';

export class GetAllStudents implements IGetAllStudentsUseCase {
  studentRepository: IStudentRepository;

  constructor(studentRepository: IStudentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute(): Promise<IStudentResponseModel[]> {
    return await this.studentRepository.getStudents();
  }
}
