import { LoadStudentsUseCase } from '@/domain/use-cases';
import {
  Controller,
  HttpResponse,
  noContent,
  ok,
  serverError
} from '@/presentation/interfaces';
import { StudentViewModel } from '@/presentation/view-models';

export class LoadStudentsController implements Controller {
  constructor(private readonly LoadStudentsUseCase: LoadStudentsUseCase) {}

  async handle(): Promise<HttpResponse<StudentViewModel[]>> {
    try {
      const students = await this.LoadStudentsUseCase.load();
      return students.length
        ? ok(StudentViewModel.mapCollection(students))
        : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
