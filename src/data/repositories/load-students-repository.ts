import { LoadStudentsUseCase } from '@/domain/use-cases';

export interface LoadStudentsRepository {
  loadAll: () => Promise<LoadStudentsRepository.Result>;
}

export namespace LoadStudentsRepository {
  export type Result = LoadStudentsUseCase.Result;
}
