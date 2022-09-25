import 'module-alias/register';

import { setupApp } from '@/main/config/app';
import env from '@/main/config/env';
import { SQLiteDatabase } from '@/infra/db/orm';

const getCurrentDatabase = () => {
  const provider = env.currentDatabase;

  if (provider === 'postgres') {
    throw new Error('Not implemented');
  }

  if (provider === 'mysql') {
    throw new Error('Not implemented');
  }

  if (provider === 'sqlite') {
    return new SQLiteDatabase();
  }

  return new SQLiteDatabase();
};

const database = getCurrentDatabase();

database
  .connect()
  .then(async () => {
    const url = `http://${env.host}:${env.port}/api/v1/alunos`;
    const db = env.currentDatabase.toUpperCase();

    const app = await setupApp();
    app.listen(env.port, () => console.log(`Running on ${url} with ${db}`));
  })
  .catch(console.error);
