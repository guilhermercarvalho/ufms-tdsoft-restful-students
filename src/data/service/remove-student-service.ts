import { StudentModel } from '@/data/models';
import { RemoveStudentRepository } from '@/data/repositories';
import { RemoveStudentUseCase } from '@/domain/use-cases';

export class RemoveStudentService implements RemoveStudentUseCase {
  constructor(
    private readonly removeStudentRepository: RemoveStudentRepository
  ) {}

  async remove(params: RemoveStudentUseCase.Params): Promise<StudentModel> {
    return await this.removeStudentRepository.remove(params);
  }
}
