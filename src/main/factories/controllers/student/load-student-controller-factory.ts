import { makeLoadStudentService } from '@/main/factories/services';
import { makeIdStudentValidation } from '@/main/factories/validations';
import { LoadStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeLoadStudentController = (): Controller => {
  const controller = new LoadStudentController(
    makeIdStudentValidation(),
    makeLoadStudentService()
  );
  return controller;
};
