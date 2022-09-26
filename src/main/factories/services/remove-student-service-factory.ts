import { RemoveStudentService } from '@/data/service';
import { RemoveStudentUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeRemoveStudentService = (): RemoveStudentUseCase => {
  const studentRepository = getStudentRepositoryHelper();
  return new RemoveStudentService(studentRepository);
};
