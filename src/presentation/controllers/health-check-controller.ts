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
        date: new Date(Date.now()).toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
        timestamp: Date.now()
      };

      return ok(healthCheck);
    } catch (error) {
      return serverUnavailable(error);
    }
  }
}
