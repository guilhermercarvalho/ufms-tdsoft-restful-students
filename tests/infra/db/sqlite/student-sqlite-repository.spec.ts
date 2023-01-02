import { PaginationModel, StudentModel } from '@/data/models';
import { SQLiteStudentEntity, SQLiteStudentRepository } from '@/infra/db/orm';
import {
  mockAddStudentParams,
  mockUpdateStudentParams
} from '@/tests/domain/mocks';

import { faker } from '@faker-js/faker';
import { DataSource, Repository } from 'typeorm';

let studentRepository: Repository<SQLiteStudentEntity>;
const dataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [SQLiteStudentEntity]
});

const makeSut = (): SQLiteStudentRepository => {
  return new SQLiteStudentRepository(dataSource);
};

describe('SQLiteStudentRepository', () => {
  beforeAll(async () => {
    await dataSource.initialize();
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  beforeEach(async () => {
    studentRepository = dataSource.getRepository(SQLiteStudentEntity);
    await studentRepository.clear();
  });

  // TODO: implement test for exceptions when student is (or not) found
  describe('add()', () => {
    test('Should add student on success', async () => {
      const addStudentModel = mockAddStudentParams();

      const sut = makeSut();
      await sut.add(addStudentModel);

      const count = await studentRepository
        .createQueryBuilder('student')
        .where(
          `student.nome = :name \
          AND student.rga = :rga \
          AND student.curso = :course \
          AND student.situacao = :status`,
          {
            name: addStudentModel.name,
            rga: addStudentModel.rga,
            course: addStudentModel.course,
            status: addStudentModel.status
          }
        )
        .getCount();

      expect(count).toBe(1);
    });
  });

  describe('update()', () => {
    test('Should update student on success', async () => {
      const addStudentModel = mockAddStudentParams();
      const updateStudentModel = mockUpdateStudentParams();

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModel)
        .execute();

      const studentAdded: StudentModel = await studentRepository.findOneBy({
        name: addStudentModel.name,
        rga: addStudentModel.rga,
        course: addStudentModel.course,
        status: addStudentModel.status
      });

      const sut = makeSut();
      const studentUpdated = await sut.update({
        id: studentAdded.id,
        name: updateStudentModel.name,
        course: updateStudentModel.course,
        status: updateStudentModel.status
      });

      expect(studentUpdated.id).toBe(studentAdded.id);
      expect(studentUpdated.name).toBe(updateStudentModel.name);
      expect(studentUpdated.course).toBe(updateStudentModel.course);
      expect(studentUpdated.status).toBe(updateStudentModel.status);
      expect(studentUpdated.rga).toBe(addStudentModel.rga);
      expect(studentUpdated.registeredIn).toBe(studentAdded.registeredIn);
    });
  });

  describe('remove()', () => {
    test('Should remove student on success', async () => {
      const addStudentModel = mockAddStudentParams();

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModel)
        .execute();

      const student: StudentModel = await studentRepository.findOneBy({
        name: addStudentModel.name,
        rga: addStudentModel.rga,
        course: addStudentModel.course,
        status: addStudentModel.status
      });

      const sut = makeSut();
      await sut.remove({ id: student.id });

      const count = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      expect(count).toBe(0);
    });
  });

  describe('loadAllPaged()', () => {
    test('Should load page with all students on success', async () => {
      const addStudentModels = [mockAddStudentParams(), mockAddStudentParams()];

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModels)
        .execute();

      const students: StudentModel[] = await studentRepository.find({
        where: [
          { rga: addStudentModels[0].rga },
          { rga: addStudentModels[1].rga }
        ]
      });

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      const sut = makeSut();
      const studentsPaged: PaginationModel = await sut.loadAllPaged({});

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(2);

      expect(studentsCount).toBe(2);

      expect(studentsPaged.result[0].id).toBeTruthy();
      expect(studentsPaged.result[0]).toStrictEqual(students[0]);

      expect(studentsPaged.result[1].id).toBeTruthy();
      expect(studentsPaged.result[1]).toStrictEqual(students[1]);
    });

    test('Should load page with fewer students when a threshold lower than the amount of created students is set', async () => {
      const addStudentModels = [];
      for (let i = 0; i < 26; i++) {
        addStudentModels.push(mockAddStudentParams());
      }

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModels)
        .execute();

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      const sut = makeSut();
      let studentsPaged: PaginationModel = await sut.loadAllPaged({ limit: 5 });

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(5);
      expect(studentsPaged.pagination.pageCount).toBe(6);
      expect(studentsPaged.pagination.hasNextPage).toBeTruthy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(5);

      studentsPaged = await sut.loadAllPaged({ page: 2, limit: 5 });

      expect(studentsPaged.pagination.page).toBe(2);
      expect(studentsPaged.pagination.limit).toBe(5);
      expect(studentsPaged.pagination.pageCount).toBe(6);
      expect(studentsPaged.pagination.hasNextPage).toBeTruthy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeTruthy();
      expect(studentsPaged.resultSize).toBe(5);

      studentsPaged = await sut.loadAllPaged({ page: 6, limit: 5 });

      expect(studentsPaged.pagination.page).toBe(6);
      expect(studentsPaged.pagination.limit).toBe(5);
      expect(studentsPaged.pagination.pageCount).toBe(6);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeTruthy();
      expect(studentsPaged.resultSize).toBe(1);

      expect(studentsCount).toBe(26);
    });

    test('Should load page with all students when a limit greater than the amount of created students is set', async () => {
      const addStudentModels = [];
      for (let i = 0; i < 25; i++) {
        addStudentModels.push(mockAddStudentParams());
      }

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModels)
        .execute();

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      const sut = makeSut();
      let studentsPaged: PaginationModel = await sut.loadAllPaged({
        limit: 50
      });

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(50);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(25);

      studentsPaged = await sut.loadAllPaged({ page: 2, limit: 50 });

      expect(studentsPaged.pagination.page).toBe(2);
      expect(studentsPaged.pagination.limit).toBe(50);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeTruthy();
      expect(studentsPaged.resultSize).toBe(0);

      expect(studentsCount).toBe(25);
    });

    test('Should load page with empty students on invalid page', async () => {
      const addStudentModels = [mockAddStudentParams()];

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModels)
        .execute();

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      const sut = makeSut();
      let studentsPaged: PaginationModel = await sut.loadAllPaged({ page: 2 });

      expect(studentsPaged.pagination.page).toBe(2);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeTruthy();
      expect(studentsPaged.resultSize).toBe(0);
      expect(studentsPaged.result.length).toBe(0);

      studentsPaged = await sut.loadAllPaged({ page: 3 });

      expect(studentsPaged.pagination.page).toBe(3);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(0);
      expect(studentsPaged.result.length).toBe(0);

      expect(studentsCount).toBe(1);
    });

    test('Should load page with empty result list', async () => {
      const sut = makeSut();
      const studentsPaged: PaginationModel = await sut.loadAllPaged({});

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(0);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(0);

      expect(studentsCount).toBe(0);
    });
  });

  describe('loadAllByNamePaged()', () => {
    test('Should load page with all students filtered by name on success', async () => {
      const addStudentModels = [mockAddStudentParams(), mockAddStudentParams()];
      const studentName = addStudentModels[0].name;

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModels)
        .execute();

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      const student: StudentModel = await studentRepository.findOneBy({
        rga: addStudentModels[0].rga
      });

      const sut = makeSut();
      const studentsPaged: PaginationModel = await sut.loadAllByNamePaged({
        name: studentName
      });

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(1);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(1);

      expect(studentsCount).toBe(2);

      expect(studentsPaged.result[0].id).toBeTruthy();
      expect(studentsPaged.result[0]).toStrictEqual(student);
    });

    test('Should load page with empty page result if filter by name is not found', async () => {
      const addStudentModel = mockAddStudentParams();

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModel)
        .execute();

      const name = faker.name.fullName();

      const sut = makeSut();
      const studentsPaged: PaginationModel = await sut.loadAllByNamePaged({
        name
      });

      const studentsCount = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      expect(addStudentModel.name).not.toBe(name);

      expect(studentsPaged.pagination.page).toBe(1);
      expect(studentsPaged.pagination.limit).toBe(25);
      expect(studentsPaged.pagination.pageCount).toBe(0);
      expect(studentsPaged.pagination.hasNextPage).toBeFalsy();
      expect(studentsPaged.pagination.hasPreviusPage).toBeFalsy();
      expect(studentsPaged.resultSize).toBe(0);

      expect(studentsCount).toBe(1);
    });
  });

  describe('loadOne()', () => {
    test('Should load one student on success', async () => {
      const addStudentModel = mockAddStudentParams();

      await studentRepository
        .createQueryBuilder('student')
        .insert()
        .values(addStudentModel)
        .execute();

      const student: StudentModel = await studentRepository.findOneBy({
        name: addStudentModel.name,
        rga: addStudentModel.rga,
        course: addStudentModel.course,
        status: addStudentModel.status
      });

      const sut = makeSut();
      const studentLoaded = await sut.loadOne({ id: student.id });

      expect(studentLoaded.id).toBe(student.id);
      expect(studentLoaded.rga).toBe(student.rga);
      expect(studentLoaded.name).toBe(student.name);
      expect(studentLoaded.course).toBe(student.course);
      expect(studentLoaded.status).toBe(student.status);
      expect(studentLoaded.registeredIn).toBe(student.registeredIn);
    });
  });
});
