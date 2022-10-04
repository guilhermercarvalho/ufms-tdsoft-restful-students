import { getDatabaseHelper } from '@/infra/db/orm/helpers';
import { setupApp } from '@/main/config/app';
import env from '@/main/config/env';

import { Server } from 'http';
import stoppable from 'stoppable';

const database = getDatabaseHelper();
let server: Server = null;

async function connectDatabase() {
  await database.connect().then(() => console.log('Database connected.'));
}

async function start() {
  const url = `http://${env.host}:${env.port}/api/v1/alunos`;
  const curr_db = env.currentDatabase.toUpperCase();

  const app = await setupApp();
  server = app.listen(env.port, () =>
    console.log(`Running on ${url} with ${curr_db}.`)
  );

  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
}

function gracefulShutdown(signal) {
  console.log();
  console.info(`${signal} signal received.`);
  console.log('Closing HTTP server.');

  const stoppableServer = stoppable(server);

  stoppableServer.close((error) => {
    if (error) throw error;

    console.log('HTTP server closed.');

    database.disconnect().then(() => {
      console.log('Database connection closed.');
      process.exit(0);
    });
  });
}

(async () => {
  await connectDatabase();
  start();
})();
