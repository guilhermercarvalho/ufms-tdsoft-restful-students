import { cacheSource } from '@/infra/db/orm/cache-source';
import { sqliteDataSource } from '@/infra/db/orm/data-sources';
import { Cache, Database } from '@/infra/interfaces';

import { Redis } from 'ioredis';
import { DataSource } from 'typeorm';

export class SQLiteDatabase implements Database {
  private dataSource: DataSource;
  private redis: Cache;

  constructor() {
    this.dataSource = sqliteDataSource;
    this.redis = new SQLiteRedisCache();
  }

  async connect() {
    await this.dataSource.initialize();
    await this.dataSource.queryResultCache?.connect();
    await this.dataSource.queryResultCache?.clear();
  }

  async disconnect() {
    await this.dataSource.queryResultCache?.disconnect();
    await this.dataSource.destroy();
  }

  status() {
    return this.dataSource.isInitialized;
  }

  cache() {
    return this.redis;
  }
}

class SQLiteRedisCache implements Cache {
  private cache: Redis;

  constructor() {
    this.cache = cacheSource;
  }

  status() {
    return this.cache.status;
  }
}
