import { InvalidParamError } from 'core/error';
import { SizeQueryError } from 'core/error/size-query-error';
import { StudentRepository } from 'core/repositories/student-repository';

export class GetAllStudentsPagedUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(page: number | undefined, limit: number | undefined) {
    if (page && isNaN(page)) throw new InvalidParamError('page');
    if (limit && isNaN(limit)) throw new InvalidParamError('limit');

    if (Number(page) < 1) throw new SizeQueryError('page', 0);
    if (Number(limit) < 1) throw new SizeQueryError('limit', 0);

    return this.studentRepository.getAllStudentsPaged(
      page ? Number(page) : page,
      limit ? Number(limit) : limit
    );
  }
}
