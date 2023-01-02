import { LoadStudentService } from '@/data/service';
import { LoadStudentRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';
import { faker } from '@faker-js/faker';

import MockDate from 'mockdate';

type SutTypes = {
  sut: LoadStudentService;
  loadStudentRepositorySpy: LoadStudentRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadStudentRepositorySpy = new LoadStudentRepositorySpy();
  const sut = new LoadStudentService(loadStudentRepositorySpy);
  return {
    sut,
    loadStudentRepositorySpy
  };
};

describe('LoadStudentService', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call LoadStudentRepository with correct values', async () => {
    const { sut, loadStudentRepositorySpy } = makeSut();
    const params = { id: faker.datatype.uuid() };
    await sut.load(params);
    expect(params).toStrictEqual(loadStudentRepositorySpy.params);
  });

  test('Should return one student on success', async () => {
    const { sut, loadStudentRepositorySpy } = makeSut();
    const params = { id: faker.datatype.uuid() };
    const result = await sut.load(params);
    expect(result).toStrictEqual(loadStudentRepositorySpy.result);
  });

  test('Should throw if LoadStudentRepository throws', async () => {
    const { sut, loadStudentRepositorySpy } = makeSut();
    jest
      .spyOn(loadStudentRepositorySpy, 'loadOne')
      .mockImplementationOnce(throwError);
    const promise = sut.load({ id: faker.datatype.uuid() });
    await expect(promise).rejects.toThrow();
  });
});
