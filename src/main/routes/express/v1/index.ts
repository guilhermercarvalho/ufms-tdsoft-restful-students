import { Router } from 'express';
import { Database } from 'infra/contracts/database';
import { studentRoutes } from './student';

export default (dataSource: Database): Router => {
  const router = Router();
  studentRoutes(router, dataSource);
  return router;
};
