import env from '@/main/config/env';

import path from 'path';
import { DataSource } from 'typeorm';

const { sqlite, postgres, mysql } = env.databases;
const { cache } = env.databases;
const { redis } = cache;

export const SQLiteDataSource = new DataSource({
  type: 'sqlite',
  database: sqlite.database,
  synchronize: true,
  logging: true,
  entities: [path.resolve(__dirname, 'sqlite/entities/**/*-entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, 'sqlite/migrations/**/*-migration{.ts,.js}')
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

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: postgres.host,
  port: postgres.port,
  username: postgres.user,
  password: postgres.password,
  database: postgres.database,
  synchronize: true,
  logging: true,
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

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: mysql.host,
  port: mysql.port,
  username: mysql.user,
  password: mysql.password,
  database: mysql.database,
  synchronize: true,
  logging: true,
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
