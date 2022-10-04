import { LoadStudentService } from '@/data/service';
import { LoadStudentUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeLoadStudentService = (): LoadStudentUseCase => {
  const studentRepository = getStudentRepositoryHelper();
  return new LoadStudentService(studentRepository);
};
