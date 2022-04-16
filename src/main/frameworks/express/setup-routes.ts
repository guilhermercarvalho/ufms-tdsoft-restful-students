import { Express, Router } from 'express';
import { Database } from 'infra/contracts/database';
import { studentRoutes } from 'main/routes/express/student-routes';

export default (app: Express, dataSource: Database): void => {
  const router = Router();
  app.use('/v1', router);
  studentRoutes(router, dataSource);
};
