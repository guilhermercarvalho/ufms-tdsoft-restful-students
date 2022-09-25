import { LoadStudentsPagedRepository } from '@/data/repositories';
import { LoadStudentsPagedUseCase } from '@/domain/use-cases';

export class LoadStudentsPagedService implements LoadStudentsPagedUseCase {
  constructor(
    private readonly studentRepository: LoadStudentsPagedRepository
  ) {}

  async loadPaged(
    params: LoadStudentsPagedUseCase.Params
  ): Promise<LoadStudentsPagedUseCase.Result> {
    return this.studentRepository.loadAllPaged(params);
  }
}
