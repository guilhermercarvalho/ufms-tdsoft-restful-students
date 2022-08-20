import { StudentRepository } from 'core/repositories';
import { UpdateOneStudentUseCase } from 'core/use-cases';
import { Controller } from 'presentation/contracts';
import { UpdateOneStudentController } from 'presentation/controllers';

export const updateOneStudentController = (
  repository: StudentRepository
): Controller => {
  const updateOneStudentUseCase = new UpdateOneStudentUseCase(repository);
  return new UpdateOneStudentController(updateOneStudentUseCase);
};
