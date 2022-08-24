import { Database } from 'infra/contracts';
import { DataSource } from 'typeorm';
import { connectionSourcePostgres } from './data-source';

export class PostgresDatabase implements Database {
  private dataSource!: DataSource;

  async connect() {
    this.dataSource = connectionSourcePostgres;
    await this.dataSource.initialize();
  }

  getConnection(): DataSource {
    return this.dataSource;
  }
}
