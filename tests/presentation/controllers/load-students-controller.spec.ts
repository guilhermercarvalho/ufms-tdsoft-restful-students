import { LoadStudentsController } from '@/presentation/controllers';
import { noContent, ok, serverError } from '@/presentation/interfaces';
import { StudentViewModel } from '@/presentation/view-models';
import { throwError } from '@/tests/domain/mocks';
import { LoadStudentsSpy } from '@/tests/presentation/mocks';

import MockDate from 'mockdate';

type SutTypes = {
  sut: LoadStudentsController;
  loadStudentsSpy: LoadStudentsSpy;
};

const makeSut = (): SutTypes => {
  const loadStudentsSpy = new LoadStudentsSpy();
  const sut = new LoadStudentsController(loadStudentsSpy);
  return {
    sut,
    loadStudentsSpy
  };
};

describe('LoadStudents Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('Should return 200 on success', async () => {
    const { sut, loadStudentsSpy } = makeSut();
    const httpResponse = await sut.handle();
    expect(httpResponse).toStrictEqual(
      ok(StudentViewModel.mapCollection(loadStudentsSpy.result))
    );
  });

  test('Should return 204 if LoadStudents returns empty', async () => {
    const { sut, loadStudentsSpy } = makeSut();
    loadStudentsSpy.result = [];
    const httpResponse = await sut.handle();
    expect(httpResponse).toStrictEqual(noContent());
  });

  test('Should return 500 if LoadSurveys throws', async () => {
    const { sut, loadStudentsSpy } = makeSut();
    jest.spyOn(loadStudentsSpy, 'load').mockImplementationOnce(throwError);
    const httpResponse = await sut.handle();
    expect(httpResponse).toStrictEqual(serverError(new Error()));
  });
});
