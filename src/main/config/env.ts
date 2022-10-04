import { config } from 'dotenv';
import path from 'path';

config();

export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  timezone: process.env.TZ,
  environment: process.env.NODE_ENV === 'development',
  currentDatabase: process.env.CURRENT_DATABASE || 'sqlite',
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
      port: Number(process.env.MYSQL_PORT) || 3306,
      database: process.env.MYSQL_DATABASE
    },
    sqlite: {
      database: process.env.SQLITE_DATABASE
        ? path.join(__dirname, '../../..', process.env.SQLITE_DATABASE)
        : 'student.sqlite'
    },
    cache: {
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT) || 6379
      },
      durationInMilliseconds:
        (Number(process.env.CACHE_DURATION_IN_MINUTES) || 1) * 60 * 1000
    }
  }
};
