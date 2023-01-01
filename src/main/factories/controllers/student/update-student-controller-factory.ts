import { makeUpdateStudentValidation } from '@/main/factories';
import { makeUpdateStudentService } from '@/main/factories/services/update-student-service-factory';
import { UpdateStudentController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeUpdateStudentController = (): Controller => {
  const controller = new UpdateStudentController(
    makeUpdateStudentValidation(),
    makeUpdateStudentService()
  );
  return controller;
};
