import { StudentRepository } from 'core/repositories';
import {
  GetAllStudentsPagedUseCase,
  GetStudentsByNamePagedUseCase
} from 'core/use-cases';
import { Controller } from 'presentation/contracts';
import { GetAllOrByNameStudentsPagedController } from 'presentation/controllers';

export const getAllOrByNameStudentsPagedController = (
  repository: StudentRepository
): Controller => {
  const getAllStudentsPagedUseCase = new GetAllStudentsPagedUseCase(repository);
  const getStudentsByNamePagedUseCase = new GetStudentsByNamePagedUseCase(
    repository
  );
  return new GetAllOrByNameStudentsPagedController(
    getAllStudentsPagedUseCase,
    getStudentsByNamePagedUseCase
  );
};
