import { StudentModel } from '@/data/models';
import { AddStudentUseCase, LoadStudentsUseCase } from '@/domain/use-cases';
import { mockStudentModels } from '@/tests/domain/mocks';

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

export class LoadStudentsSpy implements LoadStudentsUseCase {
  result = mockStudentModels();

  async load(): Promise<LoadStudentsUseCase.Result> {
    return this.result;
  }
}
