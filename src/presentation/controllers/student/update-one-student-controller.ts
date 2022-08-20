import { UpdateOneStudentUseCase } from 'core/use-cases';
import {
  badRequest,
  Controller,
  HttpResponse,
  success
} from 'presentation/contracts';
import { StudentView } from 'presentation/views';

export class UpdateOneStudentController implements Controller {
  constructor(private readonly updateOneStudent: UpdateOneStudentUseCase) {}

  async handle(
    request: UpdateOneStudentController.Request
  ): Promise<HttpResponse<StudentView>> {
    try {
      const id = request.params.id;
      const name = request.body.nome;
      const rga = request.body.rga;
      const course = request.body.curso;
      const status = request.body.situacao;

      const student = await this.updateOneStudent.execute(
        id,
        name,
        rga,
        course,
        status
      );

      return success({
        rga: student.rga,
        nome: student.name,
        curso: student.course,
        situacao: student.status,
        registrado_em: student.registeredIn
      });
    } catch (error: any) {
      return badRequest(error);
    }
  }
}

export namespace UpdateOneStudentController {
  export type Request = {
    params: {
      id: string;
    };
    body: {
      nome: string;
      rga: string;
      curso: string;
      situacao: string;
    };
  };
}
