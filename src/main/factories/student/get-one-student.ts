import { StudentRepository } from 'core/repositories';
import { GetOneStudentUseCase } from 'core/use-cases';
import { Controller } from 'presentation/contracts';
import { GetOneStudentController } from 'presentation/controllers';

export const getOneStudentController = (
  repository: StudentRepository
): Controller => {
  const getOneStudentUseCase = new GetOneStudentUseCase(repository);
  return new GetOneStudentController(getOneStudentUseCase);
};
