import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server: Express = express();
server.use(express.json());

export default server;
