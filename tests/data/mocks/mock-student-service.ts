import { StudentModel } from '@/data/models';
import {
  AddStudentRepository,
  LoadStudentsByNamePagedRepository,
  LoadStudentsPagedRepository,
  LoadStudentsRepository,
  RemoveStudentRepository,
  UpdateStudentRepository
} from '@/data/repositories';
import { LoadStudentsUseCase } from '@/domain/use-cases';
import {
  mockStudentByNamePaginationModel,
  mockStudentModels,
  mockStudentPaginationModel
} from '@/tests/domain/mocks';

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

export class UpdateStudentRepositorySpy implements UpdateStudentRepository {
  params: UpdateStudentRepository.Params;

  async update(params: UpdateStudentRepository.Params): Promise<StudentModel> {
    const student: StudentModel = {
      ...params,
      id: faker.datatype.uuid(),
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
    this.params = params;
    return student;
  }
}

export class RemoveStudentRepositorySpy implements RemoveStudentRepository {
  params: RemoveStudentRepository.Params;

  async remove(params: RemoveStudentRepository.Params): Promise<StudentModel> {
    const student: StudentModel = {
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
    this.params = params;
    return student;
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

export class LoadStudentsRepositorySpy implements LoadStudentsRepository {
  result = mockStudentModels();

  async loadAll(): Promise<LoadStudentsUseCase.Result> {
    return this.result;
  }
}
