import { MethodNotAllowedController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeMethodNotAllowedController = (): Controller => {
  return new MethodNotAllowedController();
};
