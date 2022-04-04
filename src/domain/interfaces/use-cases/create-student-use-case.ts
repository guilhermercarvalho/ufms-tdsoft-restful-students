import { IStudentRequestModel } from '../../models/student';

export interface ICreateStudentUseCase {
  execute(student: IStudentRequestModel): void;
}
