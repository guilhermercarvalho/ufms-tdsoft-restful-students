import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { environment } = env;
const { mysql, cache } = env.databases;
const { redis } = cache;

export default new DataSource({
  type: 'mysql',
  host: mysql.host,
  port: mysql.port,
  username: mysql.user,
  password: mysql.password,
  database: mysql.database,
  poolSize: 2,
  synchronize: true,
  logging: environment,
  entities: [path.resolve(__dirname, 'mysql/entities/**/*-entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, 'mysql/migrations/**/*-migration{.ts,.js}')
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
