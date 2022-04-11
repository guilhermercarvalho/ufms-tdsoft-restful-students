import { Student } from '../entities';

export interface IGetAllStudents {
  getAllStudents: () => Promise<Student[]>;
}
