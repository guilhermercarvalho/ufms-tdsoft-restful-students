import { LoadStudentsService } from '@/data/service';
import { LoadStudentsRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

import MockDate from 'mockdate';

type SutTypes = {
  sut: LoadStudentsService;
  loadStudentsRepositorySpy: LoadStudentsRepositorySpy;
};

const makeSut = (): SutTypes => {
  const loadStudentsRepositorySpy = new LoadStudentsRepositorySpy();
  const sut = new LoadStudentsService(loadStudentsRepositorySpy);
  return {
    sut,
    loadStudentsRepositorySpy
  };
};

describe('LoadStudentsService', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should return a list of Students on success', async () => {
    const { sut, loadStudentsRepositorySpy } = makeSut();
    const students = await sut.load();
    expect(students).toStrictEqual(loadStudentsRepositorySpy.result);
  });

  test('Should throw if LoadStudentsRepository throws', async () => {
    const { sut, loadStudentsRepositorySpy } = makeSut();
    jest
      .spyOn(loadStudentsRepositorySpy, 'loadAll')
      .mockImplementationOnce(throwError);
    const promise = sut.load();
    await expect(promise).rejects.toThrow();
  });
});
