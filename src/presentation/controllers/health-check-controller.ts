import { getDatabaseHelper } from '@/infra/db/orm/helpers';
import {
  Controller,
  HttpResponse,
  ok,
  serverUnavailable
} from '@/presentation/interfaces';

export class HealthCheckController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      const database = getDatabaseHelper();
      const cache = database.cache();

      const healthCheck = {
        uptime: process.uptime(),
        responseTime: process.hrtime(),
        database: database.status() ? 'connected' : 'disconnected',
        cacheService: cache.status(),
        message: 'OK',
        timestamp: Date.now()
      };

      return ok(healthCheck);
    } catch (error) {
      return serverUnavailable(error);
    }
  }
}
