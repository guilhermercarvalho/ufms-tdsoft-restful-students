import { IGetOneStudentUseCase } from "../../domain/interfaces/use-cases/get-one-student-use-case";
import { IStudentResponseModel } from "../../domain/models/student";
import { StudentRepository } from "../../domain/repositories/student-repository";

export class GetOneStudent implements IGetOneStudentUseCase {
  studentRepository: StudentRepository

  constructor(studentRepository: StudentRepository) {
    this.studentRepository = studentRepository
  }

  async execute(id: string): Promise<IStudentResponseModel | null> {
    return await this.studentRepository.getStudent(id)
  }
}