import { LoadStudentsPagedUseCase } from '@/domain/use-cases';

export interface LoadStudentsPagedRepository {
  loadAllPaged: (
    params: LoadStudentsPagedRepository.Params
  ) => Promise<LoadStudentsPagedRepository.Result>;
}

export namespace LoadStudentsPagedRepository {
  export type Params = LoadStudentsPagedUseCase.Params;
  export type Result = LoadStudentsPagedUseCase.Result;
}
