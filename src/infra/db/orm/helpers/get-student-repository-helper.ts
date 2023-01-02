import {
  mysqlDataSource,
  postgresDataSource,
  sqliteDataSource
} from '@/infra/db/orm/data-sources';
import {
  MySQLStudentRepository,
  PostgresStudentRepository,
  SQLiteStudentRepository
} from '@/infra/db/orm/repositories';
import env from '@/main/config/env';

export let repository: SQLiteStudentRepository = null;

export const getStudentRepositoryHelper = ():
  | SQLiteStudentRepository
  | MySQLStudentRepository
  | PostgresStudentRepository => {
  if (repository !== null) {
    return repository;
  }

  const provider = env.currentDatabase;

  if (provider === 'sqlite') {
    return createSQLiteStudentRepository();
  }

  if (provider === 'mysql') {
    return new MySQLStudentRepository(mysqlDataSource);
  }

  if (provider === 'postgres') {
    return new PostgresStudentRepository(postgresDataSource);
  }

  return createSQLiteStudentRepository();
};

const createSQLiteStudentRepository = (): SQLiteStudentRepository => {
  repository = new SQLiteStudentRepository(sqliteDataSource);
  return repository;
};
