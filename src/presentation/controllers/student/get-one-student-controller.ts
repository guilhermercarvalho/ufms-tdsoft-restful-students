import { NotFoundError } from 'core/error';
import { GetOneStudentUseCase } from 'core/use-cases';
import {
  Controller,
  getStudentOutput,
  HttpResponse,
  notFound,
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

      return success(getStudentOutput(student));
    } catch (error: any) {
      if (error instanceof NotFoundError) return notFound(error);
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
