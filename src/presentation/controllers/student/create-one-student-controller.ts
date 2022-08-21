import {
  EmptyParamError,
  InvalidParamError,
  InvalidQueryTypeError
} from 'core/error';
import { CreateOneStudentUseCase } from 'core/use-cases/student/create-one-student-use-case';
import {
  badRequest,
  Controller,
  created,
  HttpResponse,
  serverError
} from 'presentation/contracts';
import { StudentView } from 'presentation/views';

export class CreateOneStudentController implements Controller {
  constructor(private readonly createOneStudent: CreateOneStudentUseCase) {}

  async handle(
    request: CreateOneStudentController.Request
  ): Promise<HttpResponse<StudentView>> {
    try {
      const name = request.body.nome;
      const rga = request.body.rga;
      const course = request.body.curso;
      const status = request.body.situacao;

      const student = await this.createOneStudent.execute(
        name,
        rga,
        course,
        status
      );

      return created({
        rga: student.rga,
        nome: student.name,
        curso: student.course,
        situacao: student.status,
        registrado_em: student.registeredIn
      });
    } catch (error: any) {
      if (
        error instanceof EmptyParamError ||
        error instanceof InvalidParamError ||
        error instanceof InvalidQueryTypeError
      )
        return badRequest(error);
      return serverError(error);
    }
  }
}

export namespace CreateOneStudentController {
  export type Request = {
    body: {
      nome: string;
      rga: string;
      curso: string;
      situacao: string;
    };
  };
}
