import { getDatabaseHelper } from '@/infra/db/orm/helpers';
import { setupApp } from '@/main/config/app';
import env from '@/main/config/env';

import { Server } from 'http';
import stoppable from 'stoppable';

const database = getDatabaseHelper();
let server: Server = null;

async function connectDatabase() {
  await database
    .cache()
    .connect()
    .then(() => console.log('Redis connected.'));
  await database.connect().then(() => console.log('Database connected.'));
}

async function start() {
  const url = `http://${env.host}:${env.port}/api/v1/alunos`;
  const currentDatabase = env.currentDatabase.toUpperCase();

  const app = await setupApp();
  server = app.listen(env.port, () =>
    console.log(`Running on ${url} with ${currentDatabase}.`)
  );

  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
}

function gracefulShutdown(signal) {
  console.log();
  console.info(`${signal} signal received.`);
  console.log('Closing HTTP server.');

  const stoppableServer = stoppable(server);

  stoppableServer.close(async (error) => {
    if (error) throw error;

    console.log('HTTP server closed.');

    await database
      .cache()
      .disconnect()
      .then(() => {
        console.log('Redis connection closed.');
      });

    await database.disconnect().then(() => {
      console.log('Database connection closed.');
      process.exit(0);
    });
  });
}

(async () => {
  connectDatabase();
  start();
})();
