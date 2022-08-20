import { EmptyParamError } from 'core/error';
import { StudentRepository } from 'core/repositories/student-repository';
import { validateName, validatePagination } from 'core/validations';

export class GetStudentsByNamePagedUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string, page?: number, limit?: number) {
    if (!name) throw new EmptyParamError('name');

    validateName(name);
    if (page) validatePagination('page', page);
    if (limit) validatePagination('limit', limit);

    return this.studentRepository.getStudentsByNamePaged(name, page, limit);
  }
}
