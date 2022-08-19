import { EmptyParamError, InvalidParamError } from 'core/error';
import { StudentRepository } from 'core/repositories';

export class GetOneStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(id: string) {
    if (!id) throw new EmptyParamError('id');

    const expUUIDv4 =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    if (!expUUIDv4.test(id)) throw new InvalidParamError('id');

    return this.studentRepository.getOneStudent(id);
  }
}
