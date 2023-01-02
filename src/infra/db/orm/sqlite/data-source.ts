import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { isDevEnvironment } = env;
const { sqlite, cache } = env.databases;
const { redis } = cache;

const database =
  !isDevEnvironment && sqlite.database === ':memory:'
    ? 'database.sql'
    : sqlite.database;

export default new DataSource({
  type: 'sqlite',
  database,
  synchronize: isDevEnvironment,
  logging: isDevEnvironment,
  entities: [path.resolve(__dirname, 'entities/**/*-entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'migrations/**/*-migration{.ts,.js}')],
  migrationsRun: isDevEnvironment,
  cache: {
    type: 'ioredis',
    options: {
      host: redis.host,
      port: redis.port
    },
    ignoreErrors: true
  }
});
