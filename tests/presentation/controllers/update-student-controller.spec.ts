import { UpdateStudentController } from '@/presentation/controllers';
import { ItemNotFound } from '@/presentation/errors';
import { badRequest, notFound, serverError } from '@/presentation/interfaces';
import { throwError, throwStudentNotFound } from '@/tests/domain/mocks';
import { UpdateStudentSpy, ValidationSpy } from '@/tests/presentation/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

const mockRequest = (): UpdateStudentController.Request => ({
  id: faker.datatype.uuid(),
  nome: faker.name.fullName(),
  curso: faker.helpers.arrayElement([
    'cc',
    'si',
    'ecomp',
    'engsoft',
    'tads',
    'trc'
  ]),
  situacao: faker.helpers.arrayElement(['ativo', 'inativo'])
});

type SutTypes = {
  sut: UpdateStudentController;
  validationSpy: ValidationSpy;
  updateStudentSpy: UpdateStudentSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const updateStudentSpy = new UpdateStudentSpy();
  const sut = new UpdateStudentController(validationSpy, updateStudentSpy);
  return {
    sut,
    validationSpy,
    updateStudentSpy
  };
};

describe('UpdateStudent Controller', () => {
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
    expect(validationSpy.input).toHaveProperty('name', request.nome);
    expect(validationSpy.input).toHaveProperty('course', request.curso);
    expect(validationSpy.input).toHaveProperty('status', request.situacao);
  });

  test('Should return 500 if UpdateStudent throws', async () => {
    const { sut, updateStudentSpy } = makeSut();
    jest.spyOn(updateStudentSpy, 'update').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });

  test('Should return 404 if student not found', async () => {
    const { sut, updateStudentSpy } = makeSut();
    jest
      .spyOn(updateStudentSpy, 'update')
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

  test('Should return 201 on success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockRequest());
    expect(httpResponse.statusCode).toBe(201);
  });
});
