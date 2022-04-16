import { Router } from 'express';
import { readdirSync } from 'fs';
import { Database } from 'infra/contracts/database';

export const studentRoutes = (router: Router, dataSource: Database): void => {
  router.use('/alunos', router);
  readdirSync(`${__dirname}/`).map(async (file) => {
    if (file.includes('-route.ts')) {
      const route = await import(`${__dirname}/${file}`);
      route.default(router, dataSource);
    }
  });
};
