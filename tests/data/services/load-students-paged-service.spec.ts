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

  test('Should call LoadStudentsPagedRepository', async () => {
    const { sut, loadStudentsPagedRepositorySpy } = makeSut();
    const data = {};
    await sut.loadPaged(data);
    expect(loadStudentsPagedRepositorySpy.params).toStrictEqual(data);
  });

  test('Should return a page whit Students on success', async () => {
    const { sut, loadStudentsPagedRepositorySpy } = makeSut();
    const studentPaged = await sut.loadPaged({});
    expect(studentPaged).toStrictEqual(loadStudentsPagedRepositorySpy.result);
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
