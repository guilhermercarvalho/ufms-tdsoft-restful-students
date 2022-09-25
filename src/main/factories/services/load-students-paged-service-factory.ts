import { LoadStudentsPagedService } from '@/data/service';
import { LoadStudentsPagedUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeLoadStudentsPagedService = (): LoadStudentsPagedUseCase => {
  const studentRepository = getStudentRepositoryHelper();
  return new LoadStudentsPagedService(studentRepository);
};
