import { makeRemoveStudentService } from '@/main/factories/services';
import { makeRemoveStudentValidation } from '@/main/factories/validations';
import { RemoveStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeRemoveStudentController = (): Controller => {
  const controller = new RemoveStudentController(
    makeRemoveStudentValidation(),
    makeRemoveStudentService()
  );
  return controller;
};
