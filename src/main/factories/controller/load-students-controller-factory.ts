import { LoadStudentsController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';
import { makeLoadStudentsService } from '../use-cases/load-students-use-case-factory';

export const makeLoadStudentsController = (): Controller => {
  const controller = new LoadStudentsController(makeLoadStudentsService());
  return controller;
};
