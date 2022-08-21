import { StudentRepository } from 'core/repositories';
import { Database } from 'infra/contracts';
import {
  MySQLDatabase,
  PostgresDatabase,
  SQLiteDatabase
} from 'infra/databases';
import {
  MySQLStudentRepository,
  PostgresStudentRepository,
  SQLiteStudentRepository
} from 'infra/databases/typeorm/repositories';

export function getRepository(database: Database): StudentRepository {
  if (database instanceof PostgresDatabase)
    return new PostgresStudentRepository(database.getConnection());

  if (database instanceof MySQLDatabase)
    return new MySQLStudentRepository(database.getConnection());

  if (database instanceof SQLiteDatabase)
    return new SQLiteStudentRepository(database.getConnection());

  return new PostgresStudentRepository(database.getConnection());
}
