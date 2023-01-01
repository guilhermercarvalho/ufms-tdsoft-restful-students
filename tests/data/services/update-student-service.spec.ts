import { UpdateStudentService } from '@/data/service';
import { UpdateStudentRepositorySpy } from '@/tests/data/mocks';
import { mockUpdateStudentParams, throwError } from '@/tests/domain/mocks';

import MockeDate from 'mockdate';

type SutTypes = {
  sut: UpdateStudentService;
  updateStudentRepositorySpy: UpdateStudentRepositorySpy;
};

const makeSut = (): SutTypes => {
  const updateStudentRepositorySpy = new UpdateStudentRepositorySpy();
  const sut = new UpdateStudentService(updateStudentRepositorySpy);
  return {
    sut,
    updateStudentRepositorySpy
  };
};

describe('UpdateStudent Service', () => {
  beforeAll(() => {
    MockeDate.set(new Date());
  });

  afterAll(() => {
    MockeDate.reset();
  });

  test('Should call UpdateStudentRepository with correct values', async () => {
    const { sut, updateStudentRepositorySpy } = makeSut();
    const studentData = mockUpdateStudentParams();
    await sut.update(studentData);
    expect(updateStudentRepositorySpy.params).toStrictEqual(studentData);
  });

  test('Should throw if UpdateStudentRepository thorws', async () => {
    const { sut, updateStudentRepositorySpy } = makeSut();
    jest
      .spyOn(updateStudentRepositorySpy, 'update')
      .mockImplementationOnce(throwError);
    const promise = sut.update(mockUpdateStudentParams());
    await expect(promise).rejects.toThrow();
  });
});
