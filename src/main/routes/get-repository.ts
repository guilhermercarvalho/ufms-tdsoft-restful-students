import { StudentRepository } from 'core/repositories/student-repository';
import { Database } from 'infra/contracts/database';
import { MySQLDatabase } from 'infra/databases';
import { PostgresDatabase } from 'infra/databases/postgres/connection';
import { PostgresStudentRepository } from 'infra/databases/postgres/repositories';
import { MySQLStudentRepository } from 'infra/databases/repositories';
import { SQLiteDatabase } from 'infra/databases/sqlite/connection';
import { SQLiteStudentRepository } from 'infra/databases/sqlite/repositories';

export function getRepository(database: Database): StudentRepository {
  if (database instanceof PostgresDatabase)
    return new PostgresStudentRepository(database.getConnection());

  if (database instanceof MySQLDatabase)
    return new MySQLStudentRepository(database.getConnection());

  if (database instanceof SQLiteDatabase)
    return new SQLiteStudentRepository(database.getConnection());

  return new PostgresStudentRepository(database.getConnection());
}
