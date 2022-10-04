import { makeRemoveStudentService } from '@/main/factories/services';
import { makeIdStudentValidation } from '@/main/factories/validations';
import { RemoveStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeRemoveStudentController = (): Controller => {
  const controller = new RemoveStudentController(
    makeIdStudentValidation(),
    makeRemoveStudentService()
  );
  return controller;
};
