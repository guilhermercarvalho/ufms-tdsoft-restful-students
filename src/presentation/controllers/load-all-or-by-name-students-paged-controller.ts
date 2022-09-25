import {
  LoadStudentsByNamePagedUseCase,
  LoadStudentsPagedUseCase
} from '@/domain/use-cases';
import {
  badRequest,
  Controller,
  HttpResponse,
  ok,
  serverError,
  Validation
} from '@/presentation/interfaces';
import {
  PaginationViewModel,
  StudentViewModel
} from '@/presentation/view-models';

export class LoadAllOrByNameStudentsPagedController implements Controller {
  constructor(
    private readonly validationPage: Validation,
    private readonly validationByName: Validation,
    private readonly loadStudentsPaged: LoadStudentsPagedUseCase,
    private readonly loadStudentsByNamePaged: LoadStudentsByNamePagedUseCase
  ) {}

  async handle(
    request: LoadAllOrByNameStudentsPagedController.Request
  ): Promise<HttpResponse> {
    try {
      const input = {
        name: request.nome?.trim(),
        page: request.pagina,
        limit: request.limite
      };

      const pagination = input.name
        ? await this.loadStudentsByName(input)
        : await this.loadStudents(input);

      if (pagination instanceof Error) return badRequest(pagination);

      return ok(
        PaginationViewModel.map(
          pagination,
          StudentViewModel.mapCollection(pagination.result)
        )
      );
    } catch (error) {
      console.log(error);
      return serverError(error);
    }
  }

  private async loadStudents(input: any): Promise<any> {
    const error = this.validationPage.validate(input);
    if (!error) return await this.loadStudentsPaged.loadPaged({ ...input });

    return error;
  }

  private async loadStudentsByName(input: any): Promise<any> {
    const error = this.validationByName.validate(input);
    if (!error)
      return await this.loadStudentsByNamePaged.loadByNamePaged({ ...input });

    return error;
  }
}

export namespace LoadAllOrByNameStudentsPagedController {
  export type Request = {
    nome?: string;
    pagina?: number;
    limite?: number;
  };
}
