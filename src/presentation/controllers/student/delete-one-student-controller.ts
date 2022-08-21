import { NotFoundError } from 'core/error';
import { DeleteOneStudentUseCase } from 'core/use-cases';
import {
  Controller,
  getStudentOutput,
  HttpResponse,
  notFound,
  serverError,
  success
} from 'presentation/contracts';
import { StudentView } from 'presentation/views';

export class DeleteOneStudentController implements Controller {
  constructor(private readonly deleteOneStudent: DeleteOneStudentUseCase) {}

  async handle(
    request: DeleteOneStudentController.Request
  ): Promise<HttpResponse<StudentView>> {
    try {
      const id = request.params.id;

      const student = await this.deleteOneStudent.execute(id);

      return success(getStudentOutput(student));
    } catch (error: any) {
      if (error instanceof NotFoundError) return notFound(error);
      return serverError(error);
    }
  }
}

export namespace DeleteOneStudentController {
  export type Request = {
    params: {
      id: string;
    };
  };
}
