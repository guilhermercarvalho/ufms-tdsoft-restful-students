import { LoadStudentsRepository } from '@/data/repositories';
import { LoadStudentsUseCase } from '@/domain/use-cases';

export class LoadStudentsService implements LoadStudentsUseCase {
  constructor(private readonly studentRepository: LoadStudentsRepository) {}

  async load(): Promise<LoadStudentsUseCase.Result> {
    return this.studentRepository.loadAll();
  }
}
