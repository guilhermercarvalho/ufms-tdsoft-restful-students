import { UpdateStudentService } from '@/data/service';
import { UpdateStudentUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeUpdateStudentService = (): UpdateStudentUseCase => {
  const studentRepository = getStudentRepositoryHelper();
  return new UpdateStudentService(studentRepository);
};
