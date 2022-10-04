import { Cache } from '@/infra/interfaces/cache';

export interface Database<T = any> {
  connect: () => Promise<T>;
  disconnect: () => Promise<void>;
  status: () => boolean;
  cache: () => Cache;
}
