import { AddStudentService } from '@/data/service';
import { AddStudentUseCase } from '@/domain/use-cases';
import { getStudentRepository } from '@/infra/db/helpers';

export const makeAddStudentService = (): AddStudentUseCase => {
  const studentRepository = getStudentRepository();
  return new AddStudentService(studentRepository);
};
