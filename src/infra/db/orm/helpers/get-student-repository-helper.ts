import { sqliteDataSource } from '@/infra/db/orm/data-sources';
import { SQLiteStudentRepository } from '@/infra/db/orm/repositories';
import env from '@/main/config/env';

export const getStudentRepositoryHelper = (): SQLiteStudentRepository => {
  const provider = env.currentDatabase;

  if (provider === 'sqlite')
    return new SQLiteStudentRepository(sqliteDataSource);

  return new SQLiteStudentRepository(sqliteDataSource);
};
