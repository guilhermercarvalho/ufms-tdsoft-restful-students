import { AddStudentService } from '@/data/service';
import { AddStudentRepositorySpy } from '@/tests/data/mocks';
import { mockAddStudentParams, throwError } from '@/tests/domain/mocks';

import MockeDate from 'mockdate';

type SutTypes = {
  sut: AddStudentService;
  addStudentRepositorySpy: AddStudentRepositorySpy;
};

const makeSut = (): SutTypes => {
  const addStudentRepositorySpy = new AddStudentRepositorySpy();
  const sut = new AddStudentService(addStudentRepositorySpy);
  return {
    sut,
    addStudentRepositorySpy
  };
};

describe('AddStudent Service', () => {
  beforeAll(() => {
    MockeDate.set(new Date());
  });

  afterAll(() => {
    MockeDate.reset();
  });

  test('Should call AddStudentRepository with correct values', async () => {
    const { sut, addStudentRepositorySpy } = makeSut();
    const studentData = mockAddStudentParams();
    await sut.add(studentData);
    expect(addStudentRepositorySpy.params).toStrictEqual(studentData);
  });

  test('Should throw if AddStudentRepository thorws', async () => {
    const { sut, addStudentRepositorySpy } = makeSut();
    jest
      .spyOn(addStudentRepositorySpy, 'add')
      .mockImplementationOnce(throwError);
    const promise = sut.add(mockAddStudentParams());
    await expect(promise).rejects.toThrow();
  });
});
