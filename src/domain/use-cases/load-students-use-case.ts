import { StudentModel } from '@/data/models';

export interface LoadStudentsUseCase {
  load: () => Promise<LoadStudentsUseCase.Result>;
}

export namespace LoadStudentsUseCase {
  export type Result = StudentModel[];
}
