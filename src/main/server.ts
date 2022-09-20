import 'module-alias/register';

import { getNewDatabase } from '@/infra/db/helpers';
import { setupApp } from '@/main/config/app';
import env from '@/main/config/env';

const database = getNewDatabase();

database
  .connect()
  .then(async () => {
    const url = `http://${env.host}:${env.port}/api/v1/alunos`;
    const db = env.currentDatabase.toUpperCase();

    const app = await setupApp();
    app.listen(env.port, () => console.log(`Running on ${url} with ${db}`));
  })
  .catch(console.error);
