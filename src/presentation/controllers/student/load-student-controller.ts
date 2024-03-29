import { LoadStudentUseCase } from '@/domain/use-cases';
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

export class LoadStudentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly loadStudent: LoadStudentUseCase
  ) {}

  async handle(request: LoadStudentController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) return badRequest(error);

      const student = await this.loadStudent.load(request);
      return ok(StudentViewModel.map(student));
    } catch (error) {
      if (error instanceof ItemNotFound) return notFound(error);
      return serverError(error);
    }
  }
}

export namespace LoadStudentController {
  export type Request = {
    id: string;
  };
}
