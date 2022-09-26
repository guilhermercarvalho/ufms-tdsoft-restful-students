import { RemoveStudentUseCase } from '@/domain/use-cases';

export interface RemoveStudentRepository {
  remove: (
    params: RemoveStudentRepository.Params
  ) => Promise<RemoveStudentRepository.Result>;
}

export namespace RemoveStudentRepository {
  export type Params = RemoveStudentUseCase.Params;
  export type Result = RemoveStudentUseCase.Result;
}
