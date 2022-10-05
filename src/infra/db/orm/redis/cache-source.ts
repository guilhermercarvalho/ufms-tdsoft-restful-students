import env from '@/main/config/env';

import Redis from 'ioredis';

const { redis } = env.databases.cache;

export const redisCacheSource = new Redis({
  host: redis.host,
  port: redis.port,
  lazyConnect: true
});
