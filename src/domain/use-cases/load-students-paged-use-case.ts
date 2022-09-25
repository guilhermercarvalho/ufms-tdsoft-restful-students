import { PaginationModel } from '@/data/models';

export interface LoadStudentsPagedUseCase {
  loadPaged: (
    params: LoadStudentsPagedUseCase.Params
  ) => Promise<LoadStudentsPagedUseCase.Result>;
}

export namespace LoadStudentsPagedUseCase {
  export type Params = {
    page?: number;
    limit?: number;
  };
  export type Result = PaginationModel;
}
