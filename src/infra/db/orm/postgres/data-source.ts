import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { isDevEnvironment } = env;
const { postgres, cache } = env.databases;
const { redis } = cache;

export default new DataSource({
  type: 'postgres',
  host: postgres.host,
  port: postgres.port,
  username: postgres.user,
  password: postgres.password,
  database: postgres.database,
  poolSize: 4,
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
    duration: cache.durationInMilliseconds,
    ignoreErrors: true
  }
});
