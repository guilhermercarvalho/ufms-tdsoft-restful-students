import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { environment } = env;
const { postgres, cache } = env.databases;
const { redis } = cache;

export default new DataSource({
  type: 'postgres',
  host: postgres.host,
  port: postgres.port,
  username: postgres.user,
  password: postgres.password,
  database: postgres.database,
  poolSize: 2,
  synchronize: true,
  logging: environment,
  entities: [path.resolve(__dirname, 'postgres/entities/**/*-entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, 'postgres/migrations/**/*-migration{.ts,.js}')
  ],
  migrationsRun: true,
  cache: {
    type: 'ioredis',
    options: {
      host: redis.host,
      port: redis.port
    },
    duration: cache.durationInMilliseconds
  }
});
