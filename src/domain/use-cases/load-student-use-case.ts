import { StudentModel } from '@/data/models';

export interface LoadStudentUseCase {
  load: (
    params: LoadStudentUseCase.Params
  ) => Promise<LoadStudentUseCase.Result>;
}

export namespace LoadStudentUseCase {
  export type Params = {
    id: string;
  };
  export type Result = StudentModel;
}
