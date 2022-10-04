import { adaptRoute } from '@/main/adapters';
import { makeHealthCheckController } from '@/main/factories';

import { Router } from 'express';

export default (router: Router): void => {
  const healthCheckRouter = Router();
  router.use('/healthcheck', healthCheckRouter);

  healthCheckRouter.get('/', adaptRoute(makeHealthCheckController()));
};
