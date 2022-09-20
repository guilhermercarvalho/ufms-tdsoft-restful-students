import { SQLiteDatabase } from '@/infra/db/orm/connections';
import env from '@/main/config/env';

export const getNewDatabase = () => {
  const provider = env.currentDatabase;
  if (provider === 'postgres') throw new Error('Not implemented');
  if (provider === 'mysql') throw new Error('Not implemented');
  if (provider === 'sqlite') return new SQLiteDatabase();

  return new SQLiteDatabase();
};
