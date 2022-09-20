import { StudentModel } from '@/data/models';

export interface LoadStudentsRepository {
  loadAll: () => Promise<LoadStudentsRepository.Result>;
}

export namespace LoadStudentsRepository {
  export type Result = StudentModel[];
}
