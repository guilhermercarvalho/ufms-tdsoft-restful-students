import express from 'express';
import { IDatabase } from '../../../infra/contracts/database';
import setupRoutes from './setup-routes';

export const expressApp = async (dataSource: IDatabase) => {
  const expressServer = express();
  setupRoutes(expressServer, dataSource);
  return expressServer;
};
