import { LoadStudentsByNamePagedService } from '@/data/service';
import { LoadStudentsByNamePagedUseCase } from '@/domain/use-cases';
import { getStudentRepositoryHelper } from '@/infra/db/orm/helpers';

export const makeLoadStudentsByNamePagedService =
  (): LoadStudentsByNamePagedUseCase => {
    const studentRepository = getStudentRepositoryHelper();
    return new LoadStudentsByNamePagedService(studentRepository);
  };
