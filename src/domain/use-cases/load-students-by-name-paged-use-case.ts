import { PaginationModel } from '@/data/models';

export interface LoadStudentsByNamePagedUseCase {
  loadByNamePaged: (
    params: LoadStudentsByNamePagedUseCase.Params
  ) => Promise<LoadStudentsByNamePagedUseCase.Result>;
}

export namespace LoadStudentsByNamePagedUseCase {
  export type Params = {
    name: string;
    page?: number;
    limit?: number;
  };
  export type Result = PaginationModel;
}
