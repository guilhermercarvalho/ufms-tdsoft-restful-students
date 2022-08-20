import { PaginationModel, StudentModel } from 'core/models';

export interface StudentRepository {
  getAllStudents: () => Promise<StudentModel[]>;
  getAllStudentsPaged: (
    page?: number,
    limit?: number
  ) => Promise<PaginationModel>;

  getStudentsByName: (name: string) => Promise<StudentModel[]>;
  getStudentsByNamePaged: (
    name: string,
    page?: number,
    limit?: number
  ) => Promise<PaginationModel>;

  getOneStudent: (id: string) => Promise<StudentModel>;

  createOneStudent: (
    name: string,
    rga: string,
    course: string,
    status?: string
  ) => Promise<StudentModel>;
}
