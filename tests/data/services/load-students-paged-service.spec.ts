import { LoadStudentsPagedService } from '@/data/service';
import { LoadStudentsPagedRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

import MockDate from 'mockdate';

type SutTypes = {
  sut: LoadStudentsPagedService;
  loadStudentsPagedRepositorySpy: LoadStudentsPagedRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadStudentsPagedRepositorySpy = new LoadStudentsPagedRepositorySpy();
  const sut = new LoadStudentsPagedService(loadStudentsPagedRepositorySpy);
  return {
    sut,
    loadStudentsPagedRepositorySpy
  };
};

describe('LoadStudentsPagedService', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call LoadStudentsPagedRepository with correct values', async () => {
    const { sut, loadStudentsPagedRepositorySpy } = makeSut();
    const params = {};
    await sut.loadPaged(params);
    expect(params).toStrictEqual(loadStudentsPagedRepositorySpy.params);
  });

  test('Should return a page with students on success', async () => {
    const { sut, loadStudentsPagedRepositorySpy } = makeSut();
    const params = {};
    const result = await sut.loadPaged(params);
    expect(result).toStrictEqual(loadStudentsPagedRepositorySpy.result);
  });

  test('Should throw if LoadStudentsRepository throws', async () => {
    const { sut, loadStudentsPagedRepositorySpy } = makeSut();
    jest
      .spyOn(loadStudentsPagedRepositorySpy, 'loadAllPaged')
      .mockImplementationOnce(throwError);
    const promise = sut.loadPaged({});
    await expect(promise).rejects.toThrow();
  });
});
