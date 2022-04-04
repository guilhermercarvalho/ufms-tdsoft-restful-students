import { Pool } from 'pg';
import { PGStudentDatabaseSource } from './database/database-sources/postgresql/pg-student-database-source';
import apiV1 from './routers/v1';
import server from './server';

async function getPGDatabaseSource() {
  const db = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
  return new PGStudentDatabaseSource(db);
}

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

(async () => {
  const databaseSource = getPGDatabaseSource();

  const apiMiddleWare = apiV1(await databaseSource);

  server.use('/v1', apiMiddleWare);

  server.listen(port, () =>
    console.log(`Running server on http://${host}:${port}`)
  );
})();
