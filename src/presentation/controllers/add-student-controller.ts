import { StudentModel } from '@/data/models';
import { AddStudentUseCase } from '@/domain/use-cases';
import {
  badRequest,
  Controller,
  created,
  HttpResponse,
  serverError
} from '@/presentation/interfaces';
import { Validation } from '@/presentation/interfaces/validation';
import { StudentViewModel } from '@/presentation/view-models';

export class AddStudentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly addStudent: AddStudentUseCase
  ) {}

  async handle(
    request: AddStudentController.Request
  ): Promise<HttpResponse<StudentModel>> {
    try {
      const input = {
        name: request.nome.trim(),
        rga: request.rga.trim(),
        course: request.curso.trim(),
        status: request.situacao?.trim()
      };

      const error = this.validation.validate(input);
      if (error) return badRequest(error);

      const student = await this.addStudent.add({
        ...input
      });
      return created(StudentViewModel.map(student));
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddStudentController {
  export type Request = {
    rga: string;
    nome: string;
    curso: string;
    situacao?: string | undefined;
  };
}
