import { UpdateStudentRepository } from '@/data/repositories';
import { UpdateStudentUseCase } from '@/domain/use-cases';

export class UpdateStudentService implements UpdateStudentUseCase {
  constructor(
    private readonly updateStudentRepository: UpdateStudentRepository
  ) {}

  async update(
    params: UpdateStudentUseCase.Params
  ): Promise<UpdateStudentUseCase.Result> {
    return await this.updateStudentRepository.update(params);
  }
}
