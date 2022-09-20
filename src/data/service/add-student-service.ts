import { AddStudentRepository } from '@/data/repositories';
import { AddStudentUseCase } from '@/domain/use-cases';

export class AddStudentService implements AddStudentUseCase {
  constructor(private readonly addStudentRepository: AddStudentRepository) {}

  async add(data: AddStudentUseCase.Params): Promise<AddStudentUseCase.Result> {
    return await this.addStudentRepository.add(data);
  }
}
