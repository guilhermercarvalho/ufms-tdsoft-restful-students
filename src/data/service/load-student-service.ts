import { LoadStudentRepository } from '@/data/repositories';
import { LoadStudentUseCase } from '@/domain/use-cases';

export class LoadStudentService implements LoadStudentUseCase {
  constructor(private readonly loadStudentRepository: LoadStudentRepository) {}

  async load(
    params: LoadStudentUseCase.Params
  ): Promise<LoadStudentUseCase.Result> {
    return await this.loadStudentRepository.loadOne(params);
  }
}
