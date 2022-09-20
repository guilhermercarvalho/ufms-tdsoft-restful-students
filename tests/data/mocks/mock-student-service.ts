import { StudentModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentsRepository
} from '@/data/repositories';
import { LoadStudentsUseCase } from '@/domain/use-cases';
import { mockStudentModels } from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';

export class AddStudentRepositorySpy implements AddStudentRepository {
  params: AddStudentRepository.Params;

  async add(params: AddStudentRepository.Params): Promise<StudentModel> {
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

export class LoadStudentsRepositorySpy implements LoadStudentsRepository {
  result = mockStudentModels();

  async loadAll(): Promise<LoadStudentsUseCase.Result> {
    return this.result;
  }
}
