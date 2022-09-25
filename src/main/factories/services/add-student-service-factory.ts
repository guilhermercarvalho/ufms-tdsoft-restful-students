import { AddStudentService } from '@/data/service';
import { AddStudentUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeAddStudentService = (): AddStudentUseCase => {
  const studentRepository = getStudentRepositoryHelper();
  return new AddStudentService(studentRepository);
};
