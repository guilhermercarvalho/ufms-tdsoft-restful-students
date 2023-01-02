import { StudentModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentRepository,
  LoadStudentsByNamePagedRepository,
  LoadStudentsPagedRepository,
  RemoveStudentRepository,
  UpdateStudentRepository
} from '@/data/repositories';
import { LoadStudentUseCase } from '@/domain/use-cases';
import {
  mockStudentByNamePaginationModel,
  mockStudentModel,
  mockStudentPaginationModel
} from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';

export class AddStudentRepositorySpy implements AddStudentRepository {
  params: AddStudentRepository.Params;
  result: AddStudentRepository.Result;

  async add(params: AddStudentRepository.Params): Promise<StudentModel> {
    this.params = params;
    this.result = {
      ...params,
      id: faker.datatype.uuid(),
      status: params.status ? params.status : 'ativo',
      registeredIn: faker.date.recent()
    };
    return this.result;
  }
}

export class UpdateStudentRepositorySpy implements UpdateStudentRepository {
  params: UpdateStudentRepository.Params;
  result: UpdateStudentRepository.Result;

  async update(params: UpdateStudentRepository.Params): Promise<StudentModel> {
    this.params = params;
    this.result = {
      ...params,
      rga:
        faker.random.numeric(4) +
        '.' +
        faker.random.numeric(4) +
        '.' +
        faker.random.numeric(3) +
        '-' +
        faker.random.numeric(1),
      name: faker.name.fullName(),
      course: faker.helpers.arrayElement([
        'cc',
        'si',
        'ecomp',
        'engsoft',
        'tads',
        'trc'
      ]),
      status: faker.helpers.arrayElement(['ativo', 'inativo']),
      registeredIn: faker.date.recent()
    };
    return this.result;
  }
}

export class RemoveStudentRepositorySpy implements RemoveStudentRepository {
  params: RemoveStudentRepository.Params;
  result: RemoveStudentRepository.Result;

  async remove(params: RemoveStudentRepository.Params): Promise<StudentModel> {
    this.params = params;
    this.result = {
      ...params,
      rga:
        faker.random.numeric(4) +
        '.' +
        faker.random.numeric(4) +
        '.' +
        faker.random.numeric(3) +
        '-' +
        faker.random.numeric(1),
      name: faker.name.fullName(),
      course: faker.helpers.arrayElement([
        'cc',
        'si',
        'ecomp',
        'engsoft',
        'tads',
        'trc'
      ]),
      status: faker.helpers.arrayElement(['ativo', 'inativo']),
      registeredIn: faker.date.recent()
    };
    return this.result;
  }
}

export class LoadStudentsPagedRepositorySpy
  implements LoadStudentsPagedRepository
{
  params: LoadStudentsPagedRepository.Params;
  result = mockStudentPaginationModel();

  async loadAllPaged(
    params: LoadStudentsPagedRepository.Params
  ): Promise<LoadStudentsPagedRepository.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadStudentsByNamePagedRepositorySpy
  implements LoadStudentsByNamePagedRepository
{
  params: LoadStudentsByNamePagedRepository.Params;
  result = mockStudentByNamePaginationModel();

  async loadAllByNamePaged(
    params: LoadStudentsByNamePagedRepository.Params
  ): Promise<LoadStudentsByNamePagedRepository.Result> {
    this.params = params;
    return this.result;
  }
}

export class LoadStudentRepositorySpy implements LoadStudentRepository {
  params: LoadStudentRepository.Params;
  result = mockStudentModel();

  async loadOne(
    params: LoadStudentRepository.Params
  ): Promise<LoadStudentUseCase.Result> {
    this.params = params;
    return this.result;
  }
}
