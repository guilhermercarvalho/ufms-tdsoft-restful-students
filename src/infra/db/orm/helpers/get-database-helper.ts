import { SQLiteDatabase } from '@/infra/db/orm/connections';
import { Database } from '@/infra/interfaces';
import env from '@/main/config/env';

export let database: Database = null;

export const getDatabaseHelper = () => {
  if (database !== null) {
    return database;
  }

  const provider = env.currentDatabase;

  if (provider === 'sqlite') {
    database = new SQLiteDatabase();
    return database;
  }

  if (provider === 'postgres') {
    throw new Error('Not implemented');
  }

  if (provider === 'mysql') {
    throw new Error('Not implemented');
  }

  database = new SQLiteDatabase();
  return database;
};
