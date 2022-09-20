import { Database } from '@/infra/db/interfaces';
import { SQLiteDataSource } from '@/infra/db/orm/data-sources';

import { DataSource } from 'typeorm';

export class SQLiteDatabase implements Database {
  private dataSource!: DataSource;

  async connect() {
    this.dataSource = SQLiteDataSource;
    await this.dataSource.initialize();
  }

  async disconnect() {
    this.dataSource.destroy();
  }
}
