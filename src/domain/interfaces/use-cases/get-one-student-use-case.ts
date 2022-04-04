import { IStudentResponseModel } from "../../models/student";

export interface IGetOneStudentUseCase {
  execute(id: string): Promise<IStudentResponseModel | null>
}