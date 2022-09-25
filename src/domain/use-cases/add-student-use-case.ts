import { StudentModel } from '@/data/models';

export interface AddStudentUseCase {
  add: (params: AddStudentUseCase.Params) => Promise<AddStudentUseCase.Result>;
}

export namespace AddStudentUseCase {
  export type Params = {
    rga: string;
    name: string;
    course: string;
    status?: string;
  };
  export type Result = StudentModel;
}
