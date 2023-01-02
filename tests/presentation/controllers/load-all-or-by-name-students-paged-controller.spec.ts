import { LoadAllOrByNameStudentsPagedController } from '@/presentation/controllers';
import { badRequest, serverError } from '@/presentation/interfaces';
import { throwError } from '@/tests/domain/mocks';
import {
  LoadStudentsByNamePagedSpy,
  LoadStudentsPagedSpy,
  ValidationSpy
} from '@/tests/presentation/mocks';

import { faker } from '@faker-js/faker';
import MockDate from 'mockdate';

const mockRequestWithName =
  (): LoadAllOrByNameStudentsPagedController.Request => ({
    nome: faker.helpers.arrayElement([
      faker.name.fullName(),
      faker.name.firstName(),
      faker.name.lastName()
    ]),
    pagina: undefined,
    limite: undefined
  });

const mockRequestWithoutName =
  (): LoadAllOrByNameStudentsPagedController.Request => ({
    nome: undefined,
    pagina: 1,
    limite: 10
  });

type SutTypes = {
  sut: LoadAllOrByNameStudentsPagedController;
  validationPageSpy: ValidationSpy;
  validationByNameSpy: ValidationSpy;
  loadStudentsPagedSpy: LoadStudentsPagedSpy;
  loadStudentsByNamePagedSpy: LoadStudentsByNamePagedSpy;
};

const makeSut = (): SutTypes => {
  const validationPageSpy = new ValidationSpy();
  const validationByNameSpy = new ValidationSpy();
  const loadStudentsPagedSpy = new LoadStudentsPagedSpy();
  const loadStudentsByNamePagedSpy = new LoadStudentsByNamePagedSpy();

  const sut = new LoadAllOrByNameStudentsPagedController(
    validationPageSpy,
    validationByNameSpy,
    loadStudentsPagedSpy,
    loadStudentsByNamePagedSpy
  );

  return {
    sut,
    validationPageSpy,
    validationByNameSpy,
    loadStudentsPagedSpy,
    loadStudentsByNamePagedSpy
  };
};

describe('LoadAllOrByNameStudentsPaged Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should call Validation page with correct values', async () => {
    const { sut, validationPageSpy } = makeSut();
    const request = mockRequestWithoutName();

    await sut.handle(request);
    expect(validationPageSpy.input).toHaveProperty('page', request.pagina);
    expect(validationPageSpy.input).toHaveProperty('limit', request.limite);
  });

  test('Should call Validation by name with correct values', async () => {
    const { sut, validationByNameSpy } = makeSut();
    const request = mockRequestWithName();

    await sut.handle(request);
    expect(validationByNameSpy.input).toHaveProperty('name', request.nome);
    expect(validationByNameSpy.input).toHaveProperty('page', request.pagina);
    expect(validationByNameSpy.input).toHaveProperty('limit', request.limite);
  });

  test('Should call LoadAllStudentsPaged with correct values', async () => {
    const { sut, loadStudentsPagedSpy } = makeSut();
    const request = mockRequestWithoutName();
    await sut.handle(request);

    expect(loadStudentsPagedSpy.params).toHaveProperty('name', request.nome);
    expect(loadStudentsPagedSpy.params).toHaveProperty('page', request.pagina);
    expect(loadStudentsPagedSpy.params).toHaveProperty('limit', request.limite);
  });

  test('Should call LoadStudentsByNamePaged with correct values', async () => {
    const { sut, loadStudentsByNamePagedSpy } = makeSut();
    const request = mockRequestWithName();
    await sut.handle(request);

    expect(loadStudentsByNamePagedSpy.params).toHaveProperty(
      'name',
      request.nome
    );
    expect(loadStudentsByNamePagedSpy.params).toHaveProperty(
      'page',
      request.pagina
    );
    expect(loadStudentsByNamePagedSpy.params).toHaveProperty(
      'limit',
      request.limite
    );
  });

  test('Should return 500 if LoadAllStudentsPaged throws', async () => {
    const { sut, loadStudentsPagedSpy } = makeSut();
    jest
      .spyOn(loadStudentsPagedSpy, 'loadPaged')
      .mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequestWithoutName());
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });

  test('Should return 500 if LoadStudentsByNamePaged throws', async () => {
    const { sut, loadStudentsByNamePagedSpy } = makeSut();
    jest
      .spyOn(loadStudentsByNamePagedSpy, 'loadByNamePaged')
      .mockImplementationOnce(throwError);
    const httpResponse = await sut.handle(mockRequestWithName());
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });

  test('Should return 400 if Validation page fails', async () => {
    const { sut, validationPageSpy } = makeSut();
    validationPageSpy.error = new Error();

    const httpResponse = await sut.handle(mockRequestWithoutName());
    expect(httpResponse).toStrictEqual(badRequest(validationPageSpy.error));
  });

  test('Should return 400 if Validation by name fails', async () => {
    const { sut, validationByNameSpy } = makeSut();
    validationByNameSpy.error = new Error();

    const httpResponse = await sut.handle(mockRequestWithName());
    expect(httpResponse).toStrictEqual(badRequest(validationByNameSpy.error));
  });

  test('Should return 200 on load all success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockRequestWithoutName());
    expect(httpResponse.statusCode).toBe(200);
  });

  test('Should return 200 on load by name success', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(mockRequestWithName());
    expect(httpResponse.statusCode).toBe(200);
  });
});
