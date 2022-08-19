import fs from 'fs';
import path from 'path';
import { Database } from 'sqlite3';

export class DumpSQLite {
  private readonly DB_DUMP_PATH = [
    __dirname,
    '..',
    '.devcontainer',
    'database'
  ];
  private readonly DB_SQLITE_PATH = path.join(__dirname, 'student.sqlite');

  private dbDumpFilesName: string[];

  constructor(...filesName: string[]) {
    this.dbDumpFilesName = filesName;
  }

  public run() {
    this.getDumpSql()
      .then((dumpSql) => {
        const db = this.openDatabase();
        return { db, dumpSql };
      })
      .then(({ db, dumpSql }) => {
        this.runQueries(db, dumpSql);
        return db;
      })
      .then((db) => {
        this.closeDatabase(db);
      })
      .catch((err) => console.error(err));
  }

  private async getDumpSql() {
    return new Promise<string>((resolve, reject) => {
      try {
        const sqlFilesContent: string[] = [];

        this.dbDumpFilesName.forEach((fileName) => {
          const filePath = path.join(...this.DB_DUMP_PATH, fileName);
          sqlFilesContent.push(fs.readFileSync(filePath, 'utf-8'));
        });

        resolve(sqlFilesContent.join('\n\n'));
      } catch (err) {
        reject(err);
      }
    });
  }

  private openDatabase() {
    if (fs.existsSync(this.DB_SQLITE_PATH)) fs.unlinkSync(this.DB_SQLITE_PATH);
    const db: Database = new Database(this.DB_SQLITE_PATH, (err) => {
      if (err) throw err;
    });
    console.log('Connected to SQLite database');
    return db;
  }

  private runQueries(db: Database, queries: string) {
    db.serialize(() => {
      db.run('BEGIN TRANSACTION');

      this.getQueries(queries).forEach((query: string) => {
        if (query)
          db.run((query += ';'), (err) => {
            if (err) throw err;
          });
      });

      db.run('COMMIT;');
    });
    console.log('All queries have been executed');
  }

  private closeDatabase(db: Database) {
    db.close((err) => {
      if (err) throw err;
    });
    console.log('Closed connection');
  }

  private getQueries(queries: string) {
    return queries
      .replace(/(\r\n|\n|\r)/gm, '')
      .trim()
      .split(';');
  }
}
