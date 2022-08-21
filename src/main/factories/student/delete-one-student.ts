import { StudentRepository } from 'core/repositories';
import { DeleteOneStudentUseCase } from 'core/use-cases';
import { Controller } from 'presentation/contracts';
import { DeleteOneStudentController } from 'presentation/controllers';

export const deleteOneStudentController = (
  repository: StudentRepository
): Controller => {
  const deleteOneStudentUseCase = new DeleteOneStudentUseCase(repository);
  return new DeleteOneStudentController(deleteOneStudentUseCase);
};
