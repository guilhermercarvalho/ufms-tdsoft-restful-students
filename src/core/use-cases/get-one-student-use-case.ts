import { EmptyParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';
import { validateId } from 'core/validations';

export class GetOneStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(id: string) {
    if (!id) throw new EmptyParamError('id');

    validateId(id);

    return this.studentRepository.getOneStudent(id);
  }
}
