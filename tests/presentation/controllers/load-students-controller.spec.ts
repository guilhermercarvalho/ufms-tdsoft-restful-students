import { LoadStudentController } from '@/presentation/controllers';
import { ItemNotFound } from '@/presentation/errors';
import {
  noContent,
  notFound,
  ok,
  serverError
} from '@/presentation/interfaces';
import { StudentViewModel } from '@/presentation/view-models';
import { throwError, throwStudentNotFound } from '@/tests/domain/mocks';
import { LoadStudentsSpy, ValidationSpy } from '@/tests/presentation/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

const mockRequest = (): LoadStudentController.Request => ({
  id: faker.datatype.uuid()
});

type SutTypes = {
  sut: LoadStudentController;
  validationSpy: ValidationSpy;
  loadStudentSpy: LoadStudentsSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const loadStudentSpy = new LoadStudentsSpy();
  const sut = new LoadStudentController(validationSpy, loadStudentSpy);
  return {
    sut,
    validationSpy,
    loadStudentSpy
  };
};

describe('LoadStudents Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should return 500 if LoadStudents throws', async () => {
    const { sut, loadStudentSpy } = makeSut();
    jest.spyOn(loadStudentSpy, 'load').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });

  test('Should return 404 if student is not found throws', async () => {
    const { sut, loadStudentSpy } = makeSut();
    jest
      .spyOn(loadStudentSpy, 'load')
      .mockImplementationOnce(throwStudentNotFound);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(notFound(new ItemNotFound('Student')));
  });

  test('Should return 200 on success', async () => {
    const { sut, loadStudentSpy } = makeSut();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(
      ok(StudentViewModel.map(loadStudentSpy.result))
    );
  });
});
