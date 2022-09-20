import { StudentModel } from '@/data/models';
import { AddStudentUseCase } from '@/domain/use-cases';

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
