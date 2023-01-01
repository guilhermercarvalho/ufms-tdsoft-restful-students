import { PaginationModel, StudentModel } from '@/data/models';
import { AddStudentUseCase, UpdateStudentUseCase } from '@/domain/use-cases';

import { faker } from '@faker-js/faker';

export const mockStudentModel = (): StudentModel => {
  return {
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
};

export const mockStudentModels = (): StudentModel[] => [
  mockStudentModel(),
  mockStudentModel()
];

export const mockStudentPaginationModel = (): PaginationModel => {
  return {
    pagination: {
      page: 1,
      limit: 25,
      pageCount: 1,
      hasNextPage: false,
      hasPreviusPage: false
    },
    resultSize: 2,
    result: mockStudentModels()
  };
};

export const mockStudentByNamePaginationModel = (): PaginationModel => {
  return {
    pagination: {
      page: 1,
      limit: 25,
      pageCount: 1,
      hasNextPage: false,
      hasPreviusPage: false
    },
    resultSize: 2,
    result: [
      { ...mockStudentModel(), name: 'João Pedro' },
      { ...mockStudentModel(), name: 'João Eduardo' }
    ]
  };
};

export const mockAddStudentParams = (): AddStudentUseCase.Params => ({
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
  status: faker.helpers.arrayElement(['ativo', 'inativo'])
});

export const mockUpdateStudentParams = (): UpdateStudentUseCase.Params => ({
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  course: faker.helpers.arrayElement([
    'cc',
    'si',
    'ecomp',
    'engsoft',
    'tads',
    'trc'
  ]),
  status: faker.helpers.arrayElement(['ativo', 'inativo'])
});
