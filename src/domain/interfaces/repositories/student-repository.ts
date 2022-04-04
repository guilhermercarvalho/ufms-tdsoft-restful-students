import { IStudentRequestModel, IStudentResponseModel } from "../../models/student";

export interface IStudentRepository {
  createStudent(student: IStudentRequestModel): Promise<void>;
  updateStudent(id: string, data: IStudentRequestModel): Promise<void>;
  deleteStudent(id: string): Promise<void>;
  getStudents(): Promise<IStudentResponseModel[]>;
  getStudent(id: string): Promise<IStudentResponseModel | null>
}