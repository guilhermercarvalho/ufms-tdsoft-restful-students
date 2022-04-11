import { StudentModel } from '../../models/student-model';

export interface IStudentRepository {
  getAllStudents: () => Promise<StudentModel[]>;
}
