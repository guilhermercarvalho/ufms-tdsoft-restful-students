import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use('/api/v1/', router);
  const routesDir = path.resolve(__dirname, '..', 'routes');
  readdirSync(routesDir).map(async (fileName) => {
    if (
      ['-router.ts', '-router.js'].some((endRouter) =>
        fileName.endsWith(endRouter)
      )
    ) {
      (await import(`${routesDir}/${fileName}`)).default(router);
    }
  });
};
