import { config } from 'dotenv';

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
    }
  }
};
