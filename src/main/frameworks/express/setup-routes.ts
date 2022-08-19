import { Express, Request, Response } from 'express';
import { Database } from 'infra/contracts/database';
import apiVersion from 'main/routes/express/v1';
import routes from 'main/config/routes';

export default (app: Express, dataSource: Database): void => {
  const apiMiddleWare = apiVersion(dataSource);

  app.use(routes.version, apiMiddleWare);

  app.get('/', (_req, res) => {
    return res.redirect(`${routes.version}${routes.students}`);
  });

  app.use((_req, res) => {
    res.status(404).json({
      data: {
        error: 'Endpoint not found'
      }
    });
  });
};
