import env from 'main/config/env';
import path from 'path';
import { DataSource } from 'typeorm';

const { mysql } = env.databases;
const { cache } = env.databases;
const { redis } = cache;

export const connectionSourceMySQL = new DataSource({
  type: 'mysql',
  host: mysql.host,
  port: mysql.port,
  username: mysql.user,
  password: mysql.password,
  database: mysql.database,
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
