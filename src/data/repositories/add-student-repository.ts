import { AddStudentUseCase } from '@/domain/use-cases';

export interface AddStudentRepository {
  add: (
    params: AddStudentRepository.Params
  ) => Promise<AddStudentRepository.Result>;
}

export namespace AddStudentRepository {
  export type Params = AddStudentUseCase.Params;
  export type Result = AddStudentUseCase.Result;
}
