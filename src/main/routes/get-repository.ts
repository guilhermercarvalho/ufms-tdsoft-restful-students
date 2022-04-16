import { StudentRepository } from 'core/repositories/student-repository';
import { Database } from 'infra/contracts/database';
import { PostgresDatabase } from 'infra/databases/postgres/connection';
import { PostgresStudentRepository } from 'infra/databases/postgres/repositories';
import { SQLiteDatabase } from 'infra/databases/sqlite/connection';
import { SQLiteStudentRepository } from 'infra/databases/sqlite/repositories';

export function getRepository(database: Database): StudentRepository {
  if (database instanceof PostgresDatabase)
    return new PostgresStudentRepository(database.getConnection());
  else if (database instanceof SQLiteDatabase)
    return new SQLiteStudentRepository(database.getConnection());
  else return new PostgresStudentRepository(database.getConnection());
}
