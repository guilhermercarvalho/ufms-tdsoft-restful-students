import { EmptyParamError, InvalidQueryTypeError } from 'core/error';
import { SizeQueryError } from 'core/error/size-query-error';
import { StudentRepository } from 'core/repositories/student-repository';

export class GetStudentsByNamePagedUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(name: string, page: number | undefined, limit: number | undefined) {
    if (page && isNaN(page)) throw new InvalidQueryTypeError('page');
    if (limit && isNaN(limit)) throw new InvalidQueryTypeError('limit');

    if (Number(page) < 1) throw new SizeQueryError('page', 0);
    if (Number(limit) < 1) throw new SizeQueryError('limit', 0);

    if (!name) throw new EmptyParamError('name');
    if (!isNaN(name as any) || typeof name !== 'string')
      throw new InvalidQueryTypeError('name');

    return this.studentRepository.getStudentsByNamePaged(
      name,
      page ? Number(page) : page,
      limit ? Number(limit) : limit
    );
  }
}
