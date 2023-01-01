import { StudentModel } from '@/data/models';

export interface UpdateStudentUseCase {
  update: (
    params: UpdateStudentUseCase.Params
  ) => Promise<UpdateStudentUseCase.Result>;
}

export namespace UpdateStudentUseCase {
  export type Params = {
    id: string;
    name?: string;
    course?: string;
    status?: string;
  };
  export type Result = StudentModel;
}
