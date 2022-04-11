import { PostgresDatabase } from '../infra/databases';
import env from './config/env';
import { expressApp } from './frameworks';

const chooseDatabase = (dbProvider: string) => {
  if (dbProvider === 'postgres') return new PostgresDatabase();
  else return new PostgresDatabase();
};

const startServer = async () => {
  const databse = chooseDatabase(env.currentDatabase);

  databse
    .connect()
    .then(async () => {
      const app = await expressApp(databse);
      app.listen(env.port, () =>
        console.log(`server running at: http://${env.host}:${env.port}/api`)
      );
    })
    .catch((error: any) => {
      console.error(error);
    });
};

startServer();
