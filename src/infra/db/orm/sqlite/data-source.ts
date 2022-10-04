import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { environment } = env;
const { sqlite, cache } = env.databases;
const { redis } = cache;

export default new DataSource({
  type: 'sqlite',
  database: environment ? ':memory:' : sqlite.database,
  synchronize: true,
  logging: environment,
  entities: [path.resolve(__dirname, 'entities/**/*-entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'migrations/**/*-migration{.ts,.js}')],
  migrationsRun: environment,
  cache: {
    type: 'ioredis',
    options: {
      host: redis.host,
      port: redis.port
    },
    ignoreErrors: true
  }
});
