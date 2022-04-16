import { PaginationModel, StudentModel } from 'core/models';

export interface StudentRepository {
  getAllStudents: () => Promise<StudentModel[]>;
  getAllStudentsPaged: (
    page: number | undefined,
    limit: number | undefined
  ) => Promise<PaginationModel>;
  getStudentsByName: (name: string) => Promise<StudentModel[]>;
  getStudentsByNamePaged: (
    name: string,
    page: number | undefined,
    limit: number | undefined
  ) => Promise<PaginationModel>;
}
