import { GetOneStudentUseCase } from 'core/use-cases';
import {
  Controller,
  HttpResponse,
  serverError,
  success
} from 'presentation/contracts';
import { StudentView } from 'presentation/views';

export class GetOneStudentController implements Controller {
  constructor(private readonly getOneStudent: GetOneStudentUseCase) {}

  async handle(
    request: GetOneStudentController.Request
  ): Promise<HttpResponse<StudentView>> {
    try {
      const id = request.params.id;

      const student = await this.getOneStudent.execute(id);

      return success({
        rga: student.rga,
        nome: student.name,
        curso: student.course,
        situacao: student.status,
        registrado_em: student.registeredIn
      });
    } catch (error: any) {
      return serverError(error);
    }
  }
}

export namespace GetOneStudentController {
  export type Request = {
    params: {
      id: string;
    };
  };
}
