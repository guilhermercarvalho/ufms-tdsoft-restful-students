import { LoadStudentsByNamePagedUseCase } from '@/domain/use-cases';

export interface LoadStudentsByNamePagedRepository {
  loadAllByNamePaged: (
    params: LoadStudentsByNamePagedRepository.Params
  ) => Promise<LoadStudentsByNamePagedRepository.Result>;
}

export namespace LoadStudentsByNamePagedRepository {
  export type Params = LoadStudentsByNamePagedUseCase.Params;
  export type Result = LoadStudentsByNamePagedUseCase.Result;
}
