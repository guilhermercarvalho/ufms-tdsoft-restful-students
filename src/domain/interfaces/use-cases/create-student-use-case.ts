import { IStudentRequestModel, IStudentResponseModel } from "../../models/student";

export interface ICreateStudentUseCase {
  execute(student: IStudentRequestModel): void
}