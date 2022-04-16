import fs from 'fs';
import path from 'path';
import { Database } from 'sqlite3';

const DB_DUMP_CREATE_FILENAME = 'create-sqlite.sql';
const DB_DUMP_INSERT_FILENAME = 'insert.sql';

const DB_DUMP_BASE_FOLDER = [__dirname, '..', '.devcontainer', 'database'];

const DB_DUMP_CREATE_PATH = path.join(
  ...DB_DUMP_BASE_FOLDER,
  DB_DUMP_CREATE_FILENAME
);

const DB_DUMP_INSERT_PATH = path.join(
  ...DB_DUMP_BASE_FOLDER,
  DB_DUMP_INSERT_FILENAME
);

const DB_SQLITE_PATH = path.join(__dirname, 'student.sqlite');

async function getDumpSql() {
  return new Promise<string>((resolve, reject) => {
    try {
      const createSqlContent = fs.readFileSync(DB_DUMP_CREATE_PATH, 'utf-8');
      const insertSqlContent = fs.readFileSync(DB_DUMP_INSERT_PATH, 'utf-8');
      resolve(createSqlContent + '\n\n' + insertSqlContent);
    } catch (err) {
      reject(err);
    }
  });
}

function openDatabase() {
  const db: Database = new Database(DB_SQLITE_PATH, (err) => {
    if (err) throw err;
  });
  console.log('Connected to SQLite database');
  return db;
}

function runQueries(db: Database, queries: string) {
  db.serialize(() => {
    db.run('BEGIN TRANSACTION');

    getQueries(queries).forEach((query: string) => {
      if (query)
        db.run((query += ';'), (err) => {
          if (err) throw err;
        });
    });

    db.run('COMMIT;');
  });
  console.log('All queries have been executed');
}

function getQueries(queries: string) {
  return queries
    .replace(/(\r\n|\n|\r)/gm, '')
    .trim()
    .split(';');
}

function closeDatabase(db: Database) {
  db.close((err) => {
    if (err) throw err;
  });
  console.log('Closed connection');
}

getDumpSql()
  .then((dumpSql) => {
    const db = openDatabase();
    return { db, dumpSql };
  })
  .then(({ db, dumpSql }) => {
    runQueries(db, dumpSql);
    return db;
  })
  .then((db) => {
    closeDatabase(db);
  })
  .catch((err) => console.error(err));
