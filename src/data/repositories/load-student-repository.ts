import { LoadStudentUseCase } from '@/domain/use-cases';

export interface LoadStudentRepository {
  loadOne: (
    params: LoadStudentUseCase.Params
  ) => Promise<LoadStudentRepository.Result>;
}

export namespace LoadStudentRepository {
  export type Params = LoadStudentUseCase.Params;
  export type Result = LoadStudentUseCase.Result;
}
