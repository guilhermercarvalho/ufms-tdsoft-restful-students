import { LoadStudentsService } from '@/data/service';
import { LoadStudentsUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeLoadStudentsService = (): LoadStudentsUseCase => {
  const fakeStudentRepository = getStudentRepositoryHelper();
  return new LoadStudentsService(fakeStudentRepository);
};
