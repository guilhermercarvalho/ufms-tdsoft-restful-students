import fs from 'fs';
import path from 'path';
import util from 'util';
import { Database } from 'sqlite3';

const DB_PATH = path.join(__dirname, 'student.sqlite');
const DB_DUMP_FILE = 'dump-sqlite.sql';
const DUMP_SQL = path.join(__dirname, DB_DUMP_FILE);

async function getDumpSql() {
  if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);
  if (fs.existsSync(DUMP_SQL)) fs.unlinkSync(DUMP_SQL);

  const dumpDevcontainerPath = path.join(
    __dirname,
    '..',
    '.devcontainer',
    'database',
    DB_DUMP_FILE
  );

  fs.copyFileSync(dumpDevcontainerPath, DUMP_SQL);

  return util.promisify(fs.readFile)(DUMP_SQL, 'utf-8');
}

getDumpSql()
  .then((dumpSql) => {
    const db: Database = new Database(DB_PATH, (err) => {
      if (err) throw err;
    });
    console.log('Connected to SQLite database');
    return { db, dumpSql };
  })
  .then(({ db, dumpSql }) => {
    db.serialize(() => {
      const queries = dumpSql
        .replace(/(\r\n|\n|\r)/gm, '')
        .trim()
        .split(';');

      db.run('BEGIN TRANSACTION');
      queries?.forEach((query: string) => {
        if (query)
          db.run((query += ';'), (err) => {
            if (err) throw err;
          });
      });
      db.run('COMMIT;');
    });
    console.log('Dumped data');
    return db;
  })
  .then((db) => {
    db.close((err) => {
      if (err) throw err;
    });
    console.log('Closed connection');
    fs.unlinkSync(DUMP_SQL);
    console.log('Removed dump file copied');
  })
  .catch((err) => console.error(err));
