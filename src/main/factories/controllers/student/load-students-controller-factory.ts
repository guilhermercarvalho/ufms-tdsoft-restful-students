import { makeLoadStudentsService } from '@/main/factories';
import { LoadStudentsController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeLoadStudentsController = (): Controller => {
  const controller = new LoadStudentsController(makeLoadStudentsService());
  return controller;
};
