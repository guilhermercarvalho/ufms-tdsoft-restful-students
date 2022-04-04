import { IStudentResponseModel } from '../../models/student';

export interface IGetAllStudentsUseCase {
  execute(): Promise<IStudentResponseModel[]>;
}
