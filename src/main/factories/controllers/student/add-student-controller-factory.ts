import { makeAddStudentValidation } from '@/main/factories';
import { makeAddStudentService } from '@/main/factories';
import { AddStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeAddStudentController = (): Controller => {
  const controller = new AddStudentController(
    makeAddStudentValidation(),
    makeAddStudentService()
  );
  return controller;
};
