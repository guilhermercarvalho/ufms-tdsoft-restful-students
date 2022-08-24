import { Database } from 'infra/contracts';
import { DataSource } from 'typeorm';
import { connectionSourceSQLite } from './data-source';

export class SQLiteDatabase implements Database {
  private dataSource!: DataSource;

  async connect() {
    this.dataSource = connectionSourceSQLite;
    await this.dataSource.initialize();
  }

  getConnection(): DataSource {
    return this.dataSource;
  }
}
