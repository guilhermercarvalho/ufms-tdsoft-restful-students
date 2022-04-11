import { IGetAllStudents } from '../../domain/use-cases';
import {
  IController,
  errorResponse,
  IHttpResponse,
  successResponse
} from '../contracts';
import { StudentViewModel } from '../veiw-model/student-view-model';

export class GetAllStudentsController implements IController {
  constructor(private readonly getAllStudents: IGetAllStudents) {
    this.getAllStudents = getAllStudents;
  }

  async handle(): Promise<IHttpResponse<StudentViewModel[]>> {
    try {
      const students = await this.getAllStudents.getAllStudents();
      return successResponse(
        students.map((student) => {
          return {
            rga: student.rga,
            nome: student.name,
            curso: student.course,
            situacao: student.status,
            registrado_em: student.registered_in
          };
        })
      );
    } catch (error: any) {
      return errorResponse(error);
    }
  }
}
