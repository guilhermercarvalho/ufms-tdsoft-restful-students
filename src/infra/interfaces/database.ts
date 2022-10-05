import { Cache } from '@/infra/interfaces/cache';

export interface Database {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  status: () => boolean;
  cache: () => Cache;
}
