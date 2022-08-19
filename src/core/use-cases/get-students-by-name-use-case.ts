import { EmptyParamError, InvalidQueryTypeError } from 'core/error';
import { StudentRepository } from 'core/repositories';

export class GetStudentsByNameUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string) {
    if (!name) throw new EmptyParamError('name');
    if (!isNaN(name as any) || typeof name !== 'string')
      throw new InvalidQueryTypeError('name');

    return this.studentRepository.getStudentsByName(name);
  }
}
