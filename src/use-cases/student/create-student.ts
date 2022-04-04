import { IStudentRepository } from "../../domain/interfaces/repositories/student-repository";
import { ICreateStudentUseCase } from "../../domain/interfaces/use-cases/create-student-use-case";
import { IStudentRequestModel } from "../../domain/models/student";

export class CreateStudent implements ICreateStudentUseCase {
  studentRepository: IStudentRepository
  
  constructor(studentRepository: IStudentRepository) {
    this.studentRepository = studentRepository
  }

  async execute(student: IStudentRequestModel) {
    this.studentRepository.createStudent(student)
  }
}