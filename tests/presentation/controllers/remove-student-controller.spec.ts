import { RemoveStudentController } from '@/presentation/controllers';
import { ItemNotFound } from '@/presentation/errors';
import { badRequest, notFound, serverError } from '@/presentation/interfaces';
import { throwError, throwStudentNotFound } from '@/tests/domain/mocks';
import { RemoveStudentSpy, ValidationSpy } from '@/tests/presentation/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

const mockRequest = (): RemoveStudentController.Request => ({
  id: faker.datatype.uuid()
});

type SutTypes = {
  sut: RemoveStudentController;
  validationSpy: ValidationSpy;
  removeStudentSpy: RemoveStudentSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const removeStudentSpy = new RemoveStudentSpy();
  const sut = new RemoveStudentController(validationSpy, removeStudentSpy);
  return {
    sut,
    validationSpy,
    removeStudentSpy
  };
};

describe('RemoveStudent Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut();
    const request = mockRequest();
    await sut.handle(request);

    expect(validationSpy.input).toHaveProperty('id', request.id);
  });

  test('Should return 500 if RemoveStudent throws', async () => {
    const { sut, removeStudentSpy } = makeSut();
    jest.spyOn(removeStudentSpy, 'remove').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });

  test('Should return 404 if student is not found throws', async () => {
    const { sut, removeStudentSpy } = makeSut();
    jest
      .spyOn(removeStudentSpy, 'remove')
      .mockImplementationOnce(throwStudentNotFound);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(notFound(new ItemNotFound('Student')));
  });

  test('Should return 400 if Validation fails', async () => {
    const { sut, validationSpy } = makeSut();
    validationSpy.error = new Error();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(badRequest(validationSpy.error));
  });

  test('Should return 200 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse.statusCode).toBe(200);
  });
});
