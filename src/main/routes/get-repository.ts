import { IStudentRepository } from '../../data/contracts/repository/student-repository';
import { IDatabase } from '../../infra/contracts/database';
import { PostgresDatabase } from '../../infra/databases';
import { PostgresStudentRepository } from '../../infra/databases/repositories';

export function getRepository(database: IDatabase): IStudentRepository {
  if (database instanceof PostgresDatabase)
    return new PostgresStudentRepository(database.getConnection());
  else return new PostgresStudentRepository(database.getConnection());
}
