import { StudentModel } from '@/data/models';

export interface RemoveStudentUseCase {
  remove: (
    params: RemoveStudentUseCase.Params
  ) => Promise<RemoveStudentUseCase.Result>;
}

export namespace RemoveStudentUseCase {
  export type Params = {
    id: string;
  };
  export type Result = StudentModel;
}
