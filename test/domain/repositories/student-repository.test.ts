/* eslint-disable @typescript-eslint/no-unused-vars */
import { IStudentDatabaseSource } from '../../../src/database/interfaces/database-sources/student-database-source';
import {
  IStudentRequestModel,
  IStudentResponseModel
} from '../../../src/domain/models/student';
import { StudentRepository } from '../../../src/domain/repositories/student-repository';

class MockStudentDatabaseSource implements IStudentDatabaseSource {
  create(student: IStudentRequestModel): Promise<void> {
    throw new Error('Method not implemented.');
  }

  updateOne(id: string, data: IStudentRequestModel): Promise<void> {
    throw new Error('Method not implemented.');
  }

  deleteOne(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<IStudentResponseModel[]> {
    throw new Error('Method not implemented.');
  }

  getOne(id: string): Promise<IStudentResponseModel> {
    throw new Error('Method not implemented.');
  }
}

describe('Student Repository', () => {
  let mockStudentDatabaseSource: IStudentDatabaseSource;
  let studentRepository: StudentRepository;

  beforeEach(() => {
    mockStudentDatabaseSource = new MockStudentDatabaseSource();
    studentRepository = new StudentRepository(mockStudentDatabaseSource);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createStudent', () => {
    test('should make create database source call', async () => {
      jest
        .spyOn(mockStudentDatabaseSource, 'create')
        .mockImplementation(() => Promise.resolve());

      await studentRepository.createStudent({
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      });

      expect(mockStudentDatabaseSource.create).toHaveBeenCalledWith({
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      });
    });
  });

  describe('updateStudent', () => {
    test('should make updateOne database source call', async () => {
      jest
        .spyOn(mockStudentDatabaseSource, 'updateOne')
        .mockImplementation(() => Promise.resolve());

      await studentRepository.updateStudent(
        '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        {
          rga: '2022-2806.086-2',
          nome: 'Pedro Garcia',
          curso: 'si',
          situacao: 'ativo',
          registrado_em: new Date('2022-02-18')
        }
      );

      expect(mockStudentDatabaseSource.updateOne).toHaveBeenCalledWith(
        '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        {
          rga: '2022-2806.086-2',
          nome: 'Pedro Garcia',
          curso: 'si',
          situacao: 'ativo',
          registrado_em: new Date('2022-02-18')
        }
      );
    });
  });

  describe('deleteStudent', () => {
    test('should make deleteOne database source call', async () => {
      jest
        .spyOn(mockStudentDatabaseSource, 'deleteOne')
        .mockImplementation(() => Promise.resolve());

      await studentRepository.deleteStudent(
        '9f3c9a2e-0afe-4949-befd-041a6b14951c'
      );

      expect(mockStudentDatabaseSource.deleteOne).toHaveBeenCalledWith(
        '9f3c9a2e-0afe-4949-befd-041a6b14951c'
      );
    });
  });

  describe('getAllStudents', () => {
    test('should return data', async () => {
      const expectedData = [
        {
          id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
          rga: '2022-2806.086-2',
          nome: 'Pedro Garcia',
          curso: 'si',
          situacao: 'ativo',
          registrado_em: new Date('2022-02-18')
        }
      ];

      jest
        .spyOn(mockStudentDatabaseSource, 'getAll')
        .mockImplementation(() => Promise.resolve(expectedData));

      const result = await studentRepository.getStudents();
      expect(result).toStrictEqual(expectedData);
    });
  });
});
