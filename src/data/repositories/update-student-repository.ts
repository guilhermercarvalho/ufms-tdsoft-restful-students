import { UpdateStudentUseCase } from '@/domain/use-cases';

export interface UpdateStudentRepository {
  update: (
    params: UpdateStudentRepository.Params
  ) => Promise<UpdateStudentRepository.Result>;
}

export namespace UpdateStudentRepository {
  export type Params = UpdateStudentUseCase.Params;
  export type Result = UpdateStudentUseCase.Result;
}
