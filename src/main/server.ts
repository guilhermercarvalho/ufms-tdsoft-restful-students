import { MySQLDatabase } from 'infra/databases';
import { PostgresDatabase } from 'infra/databases/postgres/connection';
import { SQLiteDatabase } from 'infra/databases/sqlite/connection';
import env from 'main/config/env';
import { expressApp } from 'main/frameworks';

const chooseDatabase = (dbProvider: string) => {
  if (dbProvider === 'postgres') return new PostgresDatabase();
  if (dbProvider === 'mysql') return new MySQLDatabase();
  else if (dbProvider === 'sqlite') return new SQLiteDatabase();
  else return new PostgresDatabase();
};

const startServer = async () => {
  const databse = chooseDatabase(env.currentDatabase);

  databse
    .connect()
    .then(async () => {
      const app = await expressApp(databse);
      app.listen(env.port, () =>
        console.log(`server running at: http://${env.host}:${env.port}`)
      );
    })
    .catch((error: any) => {
      console.error(error);
    });
};

startServer();
