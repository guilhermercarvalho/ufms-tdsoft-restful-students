import { RemoveStudentUseCase } from '@/domain/use-cases';
import { ItemNotFound } from '@/presentation/errors';
import {
  badRequest,
  Controller,
  HttpResponse,
  notFound,
  ok,
  serverError,
  Validation
} from '@/presentation/interfaces';
import { StudentViewModel } from '@/presentation/view-models';

export class RemoveStudentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly removeStudent: RemoveStudentUseCase
  ) {}

  async handle(
    request: RemoveStudentController.Request
  ): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const student = await this.removeStudent.remove(request);
      return ok(StudentViewModel.map(student));
    } catch (error) {
      if (error instanceof ItemNotFound) return notFound(error);
      return serverError(error);
    }
  }
}

export namespace RemoveStudentController {
  export type Request = {
    id: string;
  };
}
