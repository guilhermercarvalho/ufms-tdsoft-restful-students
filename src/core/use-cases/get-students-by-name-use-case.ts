import { EmptyParamError, InvalidQueryTypeError } from 'core/error';
import { StudentRepository } from 'core/repositories';

export class GetStudentsByNameUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string) {
    if (!name) throw new EmptyParamError('name');
    if (parseInt(name)) throw new InvalidQueryTypeError('name');

    return this.studentRepository.getStudentsByName(name);
  }
}
