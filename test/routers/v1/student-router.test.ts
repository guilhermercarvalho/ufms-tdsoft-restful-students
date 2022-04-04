/* eslint-disable @typescript-eslint/no-unused-vars */
import { ICreateStudentUseCase } from '../../../src/domain/interfaces/use-cases/create-student-use-case';
import { IGetAllStudentsUseCase } from '../../../src/domain/interfaces/use-cases/get-all-students-use-case';
import { IGetOneStudentUseCase } from '../../../src/domain/interfaces/use-cases/get-one-student-use-case';
import {
  IStudentRequestModel,
  IStudentResponseModel
} from '../../../src/domain/models/student';
import server from '../../../src/server';
import StudentRouter from '../../../src/routers/v1/students-router';
import request from 'supertest';

class MockCreateStudentUseCase implements ICreateStudentUseCase {
  execute(student: IStudentRequestModel): void {
    throw new Error('Method not implemented.');
  }
}

class MockGetAllStudentsUseCase implements IGetAllStudentsUseCase {
  execute(): Promise<IStudentResponseModel[]> {
    throw new Error('Method not implemented.');
  }
}

class MockGetOneStudentUseCase implements IGetOneStudentUseCase {
  execute(id: string): Promise<IStudentResponseModel> {
    throw new Error('Method not implemented.');
  }
}

describe('Student Router', () => {
  let mockCreateStudentUseCase: ICreateStudentUseCase;
  let mockGetAllStudentsUseCase: IGetAllStudentsUseCase;
  let mockGetOneStudentUseCase: IGetOneStudentUseCase;

  beforeAll(() => {
    mockCreateStudentUseCase = new MockCreateStudentUseCase();
    mockGetAllStudentsUseCase = new MockGetAllStudentsUseCase();
    mockGetOneStudentUseCase = new MockGetOneStudentUseCase();

    server.use(
      '/alunos',
      StudentRouter(
        mockCreateStudentUseCase,
        mockGetAllStudentsUseCase,
        mockGetOneStudentUseCase
      )
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /alunos', () => {
    test('POST /alunos', async () => {
      const inputData = {
        id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      };

      jest
        .spyOn(mockCreateStudentUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(true));

      const response = await request(server).post('/alunos').send(inputData);

      expect(response.status).toBe(201);
    });

    test('POST /alunos returns 500 on use case error', async () => {
      const inputData = {
        id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      };

      jest
        .spyOn(mockCreateStudentUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).post('/alunos').send(inputData);

      expect(response.status).toBe(500);
    });
  });

  describe('GET /alunos', () => {
    test('should return 200 with data', async () => {
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
        .spyOn(mockGetAllStudentsUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      const response = await request(server).get('/alunos');

      const bodyParsed = JSON.stringify(response.body);
      const expectedDataParsed = JSON.stringify(expectedData);

      expect(mockGetAllStudentsUseCase.execute).toBeCalledTimes(1);
      expect(response.status).toBe(200);
      expect(bodyParsed).toStrictEqual(expectedDataParsed);
    });

    test('GET /alunos returns 500 on use case error', async () => {
      jest
        .spyOn(mockGetAllStudentsUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).get('/alunos');

      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error fetching data' });
    });
  });

  describe('GET /alunos/:id', () => {
    test('should return 200 with data', async () => {
      const expectedData = {
        id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
        rga: '2022-2806.086-2',
        nome: 'Pedro Garcia',
        curso: 'si',
        situacao: 'ativo',
        registrado_em: new Date('2022-02-18')
      };

      jest
        .spyOn(mockGetOneStudentUseCase, 'execute')
        .mockImplementation(() => Promise.resolve(expectedData));

      const response = await request(server).get(
        '/alunos/9f3c9a2e-0afe-4949-befd-041a6b14951c'
      );

      const bodyParsed = JSON.stringify(response.body);
      const expectedDataParsed = JSON.stringify(expectedData);

      expect(mockGetOneStudentUseCase.execute).toBeCalledTimes(1);
      expect(response.status).toBe(200);
      expect(bodyParsed).toStrictEqual(expectedDataParsed);
    });

    test('GET /alunos returns 500 on use case error', async () => {
      jest
        .spyOn(mockGetOneStudentUseCase, 'execute')
        .mockImplementation(() => Promise.reject(Error()));

      const response = await request(server).get(
        '/alunos/9f3c9a2e-0afe-4949-befd-041a6b14951c'
      );

      expect(response.status).toBe(500);
      expect(response.body).toStrictEqual({ message: 'Error fetching data' });
    });
  });
});
