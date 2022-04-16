import { StudentRepository } from 'core/repositories/student-repository';

export class GetAllStudentsUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute() {
    return this.studentRepository.getAllStudents();
  }
}
