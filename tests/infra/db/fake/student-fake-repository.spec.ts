import { FakeStudentRepository } from '@/infra/db/fake/fake-student';
import { mockAddStudentParams } from '@/tests/domain/mocks';

const makeSut = (): FakeStudentRepository => {
  return new FakeStudentRepository();
};

describe('FakeStudentRepository', () => {
  describe('add', () => {
    test('Should add a student on success', async () => {
      const sut = makeSut();
      await sut.add(mockAddStudentParams());
      const count = sut.count();
      expect(count).toBe(1);
    });
  });

  describe('loadAll()', () => {
    test('Should load all students on success', async () => {
      const addStudentModels = [mockAddStudentParams(), mockAddStudentParams()];
      const sut = makeSut();

      const studentOne = await sut.add(addStudentModels[0]);
      const studentTwo = await sut.add(addStudentModels[1]);

      const students = await sut.loadAll();

      expect(students.length).toBe(2);

      expect(students[0].id).toBeTruthy();
      expect(students[0].rga).toBe(studentOne.rga);
      expect(students[0].name).toBe(studentOne.name);
      expect(students[0].course).toBe(studentOne.course);
      expect(students[0].status).toBe(studentOne.status);
      expect(students[0].registeredIn).toBe(studentOne.registeredIn);

      expect(students[1].id).toBeTruthy();
      expect(students[1].rga).toBe(studentTwo.rga);
      expect(students[1].name).toBe(studentTwo.name);
      expect(students[1].course).toBe(studentTwo.course);
      expect(students[1].status).toBe(studentTwo.status);
      expect(students[1].registeredIn).toBe(studentTwo.registeredIn);
    });

    test('Should load empty list', async () => {
      const sut = makeSut();
      const students = await sut.loadAll();
      expect(students.length).toBe(0);
    });
  });
});
