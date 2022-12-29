import { PaginationModel, StudentModel } from '@/data/models';
import { SQLiteStudentEntity, SQLiteStudentRepository } from '@/infra/db/orm';
import { mockAddStudentParams } from '@/tests/domain/mocks';
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

  describe('add()', () => {
    test('Should add student on success', async () => {
      const sut = makeSut();
      await sut.add(mockAddStudentParams());
      const count = await studentRepository
        .createQueryBuilder('student')
        .getCount();

      expect(count).toBe(1);
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
        rga: addStudentModel.rga
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
});
