import express from 'express';
import { Database } from 'infra/contracts/database';
import setupRoutes from './setup-routes';

export const expressApp = async (dataSource: Database) => {
  const expressServer = express();
  expressServer.use(express.json());
  setupRoutes(expressServer, dataSource);
  return expressServer;
};
