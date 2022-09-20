import { makeAddStudentValidation } from '@/main/factories/controller';
import { makeAddStudentService } from '@/main/factories/use-cases';
import { AddStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeAddStudentController = (): Controller => {
  const controller = new AddStudentController(
    makeAddStudentValidation(),
    makeAddStudentService()
  );
  return controller;
};
