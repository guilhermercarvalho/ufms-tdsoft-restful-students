import { config } from 'dotenv';
import path from 'path';

config();

export default {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  currentDatabase: process.env.CURRENT_DATABASE || 'postgres',
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      database: process.env.POSTGRES_DATABASE
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
    }
  }
};
