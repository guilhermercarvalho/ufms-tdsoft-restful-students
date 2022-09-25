import { SQLiteDataSource } from '@/infra/db/orm/data-sources';
import { Database } from '@/infra/interfaces';

import { DataSource } from 'typeorm';

export class SQLiteDatabase implements Database {
  private dataSource!: DataSource;

  async connect() {
    this.dataSource = SQLiteDataSource;
    await this.dataSource.initialize();
    await this.dataSource.queryResultCache?.clear();
  }

  async disconnect() {
    this.dataSource.destroy();
  }
}
