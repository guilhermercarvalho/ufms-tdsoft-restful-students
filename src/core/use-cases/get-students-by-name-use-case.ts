import { EmptyParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';
import { validateName } from 'core/validations';

export class GetStudentsByNameUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string) {
    if (!name) throw new EmptyParamError('name');

    validateName(name);

    return this.studentRepository.getStudentsByName(name);
  }
}
