import { LoadStudentsByNamePagedService } from '@/data/service';
import { LoadStudentsByNamePagedRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

type SutTypes = {
  sut: LoadStudentsByNamePagedService;
  loadStudentsByNamePagedRepositorySpy: LoadStudentsByNamePagedRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadStudentsByNamePagedRepositorySpy =
    new LoadStudentsByNamePagedRepositorySpy();

  const sut = new LoadStudentsByNamePagedService(
    loadStudentsByNamePagedRepositorySpy
  );

  return {
    sut,
    loadStudentsByNamePagedRepositorySpy
  };
};

describe('LoadStudentsByNamePagedService', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call LoadStudentsByNamePagedRepository', async () => {
    const { sut, loadStudentsByNamePagedRepositorySpy } = makeSut();
    const params = { name: faker.name.fullName() };
    await sut.loadByNamePaged(params);
    expect(params).toStrictEqual(loadStudentsByNamePagedRepositorySpy.params);
  });

  test('Should return a page with students filtered by name on success', async () => {
    const { sut, loadStudentsByNamePagedRepositorySpy } = makeSut();
    const params = { name: faker.name.fullName() };
    const result = await sut.loadByNamePaged(params);
    expect(result).toStrictEqual(loadStudentsByNamePagedRepositorySpy.result);
  });

  test('Should throw if LoadStudentsRepository throws', async () => {
    const { sut, loadStudentsByNamePagedRepositorySpy } = makeSut();
    jest
      .spyOn(loadStudentsByNamePagedRepositorySpy, 'loadAllByNamePaged')
      .mockImplementationOnce(throwError);
    const promise = sut.loadByNamePaged({ name: faker.name.fullName() });
    await expect(promise).rejects.toThrow();
  });
});
