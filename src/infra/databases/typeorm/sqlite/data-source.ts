import env from '../../../../main/config/env';
import path from 'path';
import { DataSource } from 'typeorm';

const { sqlite } = env.databases;
const { cache } = env.databases;
const { redis } = cache;

export const connectionSourceSQLite = new DataSource({
  type: 'sqlite',
  database: sqlite.database,
  synchronize: true,
  logging: true,
  entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'migrations/**/*-migration{.ts,.js}')],
  migrationsRun: true,
  cache: {
    type: 'ioredis',
    options: {
      host: redis.host,
      port: redis.port
    },
    duration: cache.durationInMiliseconds
  }
});
