import { StudentRepository } from 'core/repositories/student-repository';
import { validatePagination } from 'core/validations';

export class GetAllStudentsPagedUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(page?: number, limit?: number) {
    if (page) validatePagination('page', page);
    if (limit) validatePagination('limit', limit);

    return this.studentRepository.getAllStudentsPaged(page, limit);
  }
}
