import { Express } from 'express';
import { Database } from 'infra/contracts/database';
import apiVersion from 'main/routes/express/v1';
import routes from 'main/config/routes';

export default (app: Express, dataSource: Database): void => {
  const apiMiddleWare = apiVersion(dataSource);
  app.use(routes.version, apiMiddleWare);
};
