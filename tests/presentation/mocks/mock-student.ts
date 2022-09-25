import { StudentModel } from '@/data/models';
import { LoadStudentsPagedRepository } from '@/data/repositories';
import {
  AddStudentUseCase,
  LoadStudentsByNamePagedUseCase,
  LoadStudentsPagedUseCase,
  LoadStudentsUseCase
} from '@/domain/use-cases';
import {
  mockStudentModels,
  mockStudentPaginationModel
} from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';

export class AddStudentSpy implements AddStudentUseCase {
  params: AddStudentUseCase.Params | undefined;

  async add(
    params: AddStudentUseCase.Params
  ): Promise<AddStudentUseCase.Result> {
    const student: StudentModel = {
      ...params,
      id: faker.datatype.uuid(),
      status: params.status ? params.status : 'ativo',
      registeredIn: faker.date.recent()
    };
    this.params = params;
    return student;
  }
}

// remove
export class LoadAllOrByNameStudentsPagedSpy
  implements LoadStudentsPagedUseCase, LoadStudentsByNamePagedUseCase
{
  params: LoadStudentsPagedRepository.Params;
  result = mockStudentPaginationModel();

  async loadPaged(
    params: LoadStudentsPagedUseCase.Params
  ): Promise<LoadStudentsPagedUseCase.Result> {
    this.params = params;
    return this.result;
  }

  async loadByNamePaged(
    params: LoadStudentsByNamePagedUseCase.Params
  ): Promise<LoadStudentsByNamePagedUseCase.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadStudentsPagedSpy implements LoadStudentsPagedUseCase {
  params: LoadStudentsPagedUseCase.Params;
  result = mockStudentPaginationModel();

  async loadPaged(
    params: LoadStudentsPagedUseCase.Params
  ): Promise<LoadStudentsPagedUseCase.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadStudentsByNamePagedSpy
  implements LoadStudentsByNamePagedUseCase
{
  params: LoadStudentsByNamePagedUseCase.Params;
  result = mockStudentPaginationModel();

  async loadByNamePaged(
    params: LoadStudentsByNamePagedUseCase.Params
  ): Promise<LoadStudentsByNamePagedUseCase.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadStudentsSpy implements LoadStudentsUseCase {
  result = mockStudentModels();

  async load(): Promise<LoadStudentsUseCase.Result> {
    return this.result;
  }
}
