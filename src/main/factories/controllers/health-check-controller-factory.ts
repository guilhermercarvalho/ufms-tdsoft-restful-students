import { HealthCheckController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeHealthCheckController = (): Controller => {
  return new HealthCheckController();
};
