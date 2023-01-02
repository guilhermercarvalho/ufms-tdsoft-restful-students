import { RedisCache } from '@/infra/db/orm/connections';
import { mysqlDataSource } from '@/infra/db/orm/data-sources';
import { Database } from '@/infra/interfaces';

import { DataSource } from 'typeorm';

export class MySQLDatabase implements Database {
  private readonly dataSource: DataSource;
  private readonly redis: RedisCache;

  constructor(redis: RedisCache) {
    this.dataSource = mysqlDataSource;
    this.redis = redis;
  }

  async connect() {
    this.dataSource.initialize();
    this.dataSource.queryResultCache?.connect();
    this.dataSource.queryResultCache?.clear();
  }

  async disconnect() {
    this.dataSource.queryResultCache?.disconnect();
    this.dataSource.destroy();
  }

  status() {
    return this.dataSource.isInitialized;
  }

  cache() {
    return this.redis;
  }
}
