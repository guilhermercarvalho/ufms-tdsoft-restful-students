import {
  IStudentRequestModel,
  IStudentResponseModel
} from '../../../domain/models/student';

export interface IStudentDatabaseSource {
  create(student: IStudentRequestModel): Promise<void>;
  updateOne(id: string, data: IStudentRequestModel): Promise<void>;
  deleteOne(id: string): Promise<void>;
  getOne(id: string): Promise<IStudentResponseModel | null>;
  getAll(): Promise<IStudentResponseModel[]>;
}
