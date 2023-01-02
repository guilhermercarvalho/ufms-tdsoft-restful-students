import {
  MySQLDatabase,
  PostgresDatabase,
  RedisCache,
  SQLiteDatabase
} from '@/infra/db/orm/connections';
import { Database } from '@/infra/interfaces';
import env from '@/main/config/env';

export let database: Database = null;

export const getDatabaseHelper = () => {
  if (database !== null) {
    return database;
  }

  const provider = env.currentDatabase;

  if (provider === 'sqlite') {
    return createSQLiteDatabase();
  }

  if (provider === 'mysql') {
    return new MySQLDatabase(new RedisCache());
  }

  if (provider === 'postgres') {
    return new PostgresDatabase(new RedisCache());
  }

  return createSQLiteDatabase();
};

const createSQLiteDatabase = (): Database => {
  database = new SQLiteDatabase(new RedisCache());
  return database;
};
