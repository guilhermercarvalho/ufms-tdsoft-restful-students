import { Database } from 'infra/contracts';
import env from 'main/config/env';
import path from 'path';
import { DataSource } from 'typeorm';

export class SQLiteDatabase implements Database {
  private dataSource!: DataSource;

  async connect() {
    const configDatabase = env.databases.sqlite;
    const database = new DataSource({
      type: 'sqlite',
      database: configDatabase.database,
      synchronize: true,
      logging: true,
      entities: [path.resolve(__dirname, './entities/*-entity{.ts,.js}')],
      migrations: [],
      subscribers: []
    });
    this.dataSource = database;
    await database.initialize();
  }

  getConnection(): DataSource {
    return this.dataSource;
  }
}
