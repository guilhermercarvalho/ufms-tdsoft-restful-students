import { sqliteDataSource } from '@/infra/db/orm/data-sources';
import { SQLiteStudentRepository } from '@/infra/db/orm/repositories';
import env from '@/main/config/env';

export let repository: SQLiteStudentRepository = null;

export const getStudentRepositoryHelper = (): SQLiteStudentRepository => {
  if (repository !== null) {
    return repository;
  }

  const provider = env.currentDatabase;

  if (provider === 'sqlite') {
    repository = new SQLiteStudentRepository(sqliteDataSource);
    return repository;
  }

  if (provider === 'postgres') {
    throw new Error('Not implemented');
  }

  if (provider === 'mysql') {
    throw new Error('Not implemented');
  }

  repository = new SQLiteStudentRepository(sqliteDataSource);
  return repository;
};
