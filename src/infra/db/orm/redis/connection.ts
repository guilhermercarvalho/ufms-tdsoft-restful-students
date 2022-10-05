import { redisCacheSource } from '@/infra/db/orm/data-sources';
import { Cache } from '@/infra/interfaces';

import { Redis } from 'ioredis';

export class RedisCache implements Cache {
  private cache: Redis;

  constructor() {
    this.cache = redisCacheSource;
  }

  async connect(): Promise<void> {
    this.cache.connect();
  }

  async disconnect(): Promise<void> {
    this.cache.quit();
  }

  status():
    | 'wait'
    | 'reconnecting'
    | 'connecting'
    | 'connect'
    | 'ready'
    | 'close'
    | 'end' {
    return this.cache.status;
  }
}
