import { StudentRepository } from 'core/repositories';
import { CreateOneStudentUseCase } from 'core/use-cases/student/create-one-student-use-case';
import { Controller } from 'presentation/contracts';
import { CreateOneStudentController } from 'presentation/controllers/student/create-one-student-controller';

export const createOneStudentController = (
  repository: StudentRepository
): Controller => {
  const createOneStudentUseCase = new CreateOneStudentUseCase(repository);
  return new CreateOneStudentController(createOneStudentUseCase);
};
