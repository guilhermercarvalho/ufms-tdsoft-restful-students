import { MySQLDatabase } from 'infra/databases';
import { PostgresDatabase } from 'infra/databases/postgres/connection';
import { SQLiteDatabase } from 'infra/databases/sqlite/connection';
import config from 'main/config/env';
import { expressApp } from 'main/frameworks';

const chooseDatabase = (dbProvider: string) => {
  if (dbProvider === 'postgres') return new PostgresDatabase();
  if (dbProvider === 'mysql') return new MySQLDatabase();
  if (dbProvider === 'sqlite') return new SQLiteDatabase();

  return new PostgresDatabase();
};

const startServer = async () => {
  const databse = chooseDatabase(config.currentDatabase);

  databse
    .connect()
    .then(async () => {
      const app = await expressApp(databse);
      app.listen(config.port, () =>
        console.log(`server running at: http://${config.host}:${config.port}`)
      );
    })
    .catch((error: any) => {
      console.error(error);
    });
};

startServer();
