import { RemoveStudentService } from '@/data/service';
import { RemoveStudentRepositorySpy } from '@/tests/data/mocks';
import { throwError } from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

type SutTypes = {
  sut: RemoveStudentService;
  removeStudentRepositorySpy: RemoveStudentRepositorySpy;
};

const makeSut = (): SutTypes => {
  const removeStudentRepositorySpy = new RemoveStudentRepositorySpy();
  const sut = new RemoveStudentService(removeStudentRepositorySpy);
  return {
    sut,
    removeStudentRepositorySpy
  };
};

describe('RemoveStudent Service', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call RemoveStudentRepository with correct values', async () => {
    const { sut, removeStudentRepositorySpy } = makeSut();
    const id = faker.datatype.uuid();
    await sut.remove({ id });
    expect(removeStudentRepositorySpy.params).toStrictEqual({ id });
  });

  test('Should throw if RemoveStudentRepository throws', async () => {
    const { sut, removeStudentRepositorySpy } = makeSut();
    jest
      .spyOn(removeStudentRepositorySpy, 'remove')
      .mockImplementationOnce(throwError);
    const promise = sut.remove({ id: faker.datatype.uuid() });
    await expect(promise).rejects.toThrow();
  });
});
