import { UpdateStudentUseCase } from '@/domain/use-cases';
import { ItemNotFound } from '@/presentation/errors';
import {
  Controller,
  HttpResponse,
  badRequest,
  created,
  notFound,
  serverError
} from '@/presentation/interfaces';
import { Validation } from '@/presentation/interfaces/validation';
import { StudentViewModel } from '@/presentation/view-models';

export class UpdateStudentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly updateStudent: UpdateStudentUseCase
  ) {}

  async handle(
    request: UpdateStudentController.Request
  ): Promise<HttpResponse> {
    try {
      const input = {
        id: request.id,
        name: request.nome?.trim(),
        course: request.curso?.trim(),
        status: request.situacao?.trim()
      };

      const error = this.validation.validate(input);
      if (error) return badRequest(error);

      const student = await this.updateStudent.update({
        ...input
      });
      return created(StudentViewModel.map(student));
    } catch (error) {
      if (error instanceof ItemNotFound) return notFound(error);
      return serverError(error);
    }
  }
}

export namespace UpdateStudentController {
  export type Request = {
    id: string;
    nome: string | undefined;
    curso: string | undefined;
    situacao: string | undefined;
  };
}
