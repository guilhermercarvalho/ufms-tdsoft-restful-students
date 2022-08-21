import { NotFoundError } from 'core/error';
import { UpdateOneStudentUseCase } from 'core/use-cases';
import {
  Controller,
  getStudentOutput,
  HttpResponse,
  notFound,
  serverError,
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

      return success(getStudentOutput(student));
    } catch (error: any) {
      if (error instanceof NotFoundError) return notFound(error);
      return serverError(error);
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
