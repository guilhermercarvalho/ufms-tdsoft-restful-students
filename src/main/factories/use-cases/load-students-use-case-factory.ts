import { LoadStudentsService } from '@/data/service';
import { LoadStudentsUseCase } from '@/domain/use-cases';
import { getStudentRepository } from '@/infra/db/helpers';

export const makeLoadStudentsService = (): LoadStudentsUseCase => {
  const fakeStudentRepository = getStudentRepository();
  return new LoadStudentsService(fakeStudentRepository);
};
