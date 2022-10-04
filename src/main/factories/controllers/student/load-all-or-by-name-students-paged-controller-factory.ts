import {
  makeLoadStudentsByNamePagedValidation,
  makeLoadStudentsPagedValidation
} from '@/main/factories';
import {
  makeLoadStudentsByNamePagedService,
  makeLoadStudentsPagedService
} from '@/main/factories';
import { LoadAllOrByNameStudentsPagedController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeLoadAllOrByNameStudentsPagedController = (): Controller => {
  const controller = new LoadAllOrByNameStudentsPagedController(
    makeLoadStudentsPagedValidation(),
    makeLoadStudentsByNamePagedValidation(),
    makeLoadStudentsPagedService(),
    makeLoadStudentsByNamePagedService()
  );
  return controller;
};
