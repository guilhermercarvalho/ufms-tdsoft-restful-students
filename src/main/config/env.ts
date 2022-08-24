import { config } from 'dotenv';
import path from 'path';

config();

export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  timeZone: process.env.TZ,
  currentDatabase: process.env.CURRENT_DATABASE || 'postgres',
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      database: process.env.POSTGRES_DATABASE
    },
    mysql: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: Number(process.env.MYSQL_PORT) || 5432,
      database: process.env.MYSQL_DATABASE
    },
    sqlite: {
      database: process.env.SQLITE_DATABASE
        ? path.join(
            __dirname,
            '..',
            '..',
            '..',
            'sqlite',
            process.env.SQLITE_DATABASE
          )
        : 'no_database_informed'
    },
    cache: {
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT) || 6379
      },
      durationInMiliseconds:
        (Number(process.env.CACHE_DURATION_IN_SECONDS) || 60) * 1000
    }
  }
};
