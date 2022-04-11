import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { IDatabase } from '../../../infra/contracts/database';

export default (app: Express, dataSource: IDatabase): void => {
  const router = Router();
  app.use('/v1', router);
  readdirSync(`${__dirname}/../../routes/express`).map(async (file) => {
    if (!file.endsWith('.map')) {
      const route = await import(`../../routes/express/${file}`);
      route.default(router, dataSource);
    }
  });
};
