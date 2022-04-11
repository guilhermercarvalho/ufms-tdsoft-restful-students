import { IStudentRepository } from '../../data/contracts/repository/student-repository';
import { GetAllStudentsService } from '../../data/services';
import { IController } from '../../presentation/contracts';
import { GetAllStudentsController } from '../../presentation/controllers/get-all-students-controller';

export const getAllStudentsController = (
  repository: IStudentRepository
): IController => {
  const getAllStudentsService = new GetAllStudentsService(repository);
  return new GetAllStudentsController(getAllStudentsService);
};
