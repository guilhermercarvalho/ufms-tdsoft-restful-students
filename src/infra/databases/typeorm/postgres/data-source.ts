import env from 'main/config/env';
import path from 'path';
import { DataSource } from 'typeorm';

const { postgres } = env.databases;
const { cache } = env.databases;
const { redis } = cache;

export const connectionSourcePostgres = new DataSource({
  type: 'postgres',
  host: postgres.host,
  port: postgres.port,
  username: postgres.user,
  password: postgres.password,
  database: postgres.database,
  synchronize: true,
  logging: true,
  entities: [path.resolve(__dirname, './entities/**/*-entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'migrations/**/*-migration{.ts,.js}')],
  subscribers: [
    path.resolve(__dirname, 'subscribers/**/*-subscriber{.ts,.js}')
  ],
  cache: {
    type: 'ioredis',
    options: {
      host: redis.host,
      port: redis.port
    },
    duration: cache.durationInMiliseconds
  }
});
