import { SQLiteDataSource } from '@/infra/db/orm';
import { SQLiteStudentRepository } from '@/infra/db/orm/repositories';
import env from '@/main/config/env';

export const getStudentRepository = (): SQLiteStudentRepository => {
  const provider = env.currentDatabase;

  if (provider === 'sqlite')
    return new SQLiteStudentRepository(SQLiteDataSource);

  return new SQLiteStudentRepository(SQLiteDataSource);
};
