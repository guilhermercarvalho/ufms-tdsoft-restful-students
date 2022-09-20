import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use('/api/v1/', router);
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    if (fileName.endsWith('-router.ts')) {
      (await import(`${__dirname}/../routes/${fileName}`)).default(router);
    }
  });
};
