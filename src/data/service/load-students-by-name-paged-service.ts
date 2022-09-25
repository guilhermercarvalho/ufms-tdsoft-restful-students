import { LoadStudentsByNamePagedRepository } from '@/data/repositories';
import { LoadStudentsByNamePagedUseCase } from '@/domain/use-cases';

export class LoadStudentsByNamePagedService
  implements LoadStudentsByNamePagedUseCase
{
  constructor(
    private readonly studentRepository: LoadStudentsByNamePagedRepository
  ) {}

  async loadByNamePaged(
    params: LoadStudentsByNamePagedUseCase.Params
  ): Promise<LoadStudentsByNamePagedUseCase.Result> {
    return this.studentRepository.loadAllByNamePaged(params);
  }
}
