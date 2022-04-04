/* eslint-disable @typescript-eslint/no-unused-vars */
import { IStudentRepository } from '../../../../src/domain/interfaces/repositories/student-repository';
import {
  IStudentRequestModel,
  IStudentResponseModel
} from '../../../../src/domain/models/student';
import { CreateStudent } from '../../../../src/use-cases/student/create-student';

describe('Create Student Use Case', () => {
  class MockStudentRepository implements IStudentRepository {
    createStudent(student: IStudentRequestModel): Promise<void> {
      throw new Error('Method not implemented.');
    }

    updateStudent(id: string, data: IStudentRequestModel): Promise<void> {
      throw new Error('Method not implemented.');
    }

    deleteStudent(id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }

    getStudents(): Promise<IStudentResponseModel[]> {
      throw new Error('Method not implemented.');
    }

    getStudent(id: string): Promise<IStudentResponseModel | null> {
      throw new Error('Method not implemented.');
    }
  }

  let mockStudentRepository: IStudentRepository;

  beforeAll(() => {
    mockStudentRepository = new MockStudentRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return true', async () => {
    const inputData: IStudentResponseModel = {
      id: '9f3c9a2e-0afe-4949-befd-041a6b14951c',
      rga: '2022-2806.086-2',
      nome: 'Pedro Garcia',
      curso: 'si',
      situacao: 'ativo',
      registrado_em: new Date('2022-02-18')
    };

    jest
      .spyOn(mockStudentRepository, 'createStudent')
      .mockImplementation(() => Promise.resolve());

    const createStudentUseCase = new CreateStudent(mockStudentRepository);
    await createStudentUseCase.execute(inputData);
    expect(mockStudentRepository.createStudent).toBeCalledTimes(1);
  });
});
