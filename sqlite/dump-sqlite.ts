import fs from 'fs';
import path from 'path';
import { Database } from 'sqlite3';

export class DumpSQLite {
  private static dbSQLitePath: string = path.join(__dirname, 'student.sqlite');
  private static dbDumpFilesName: string[];
  private static dbDumpPath: string[] = [
    __dirname,
    '..',
    '.devcontainer',
    'database'
  ];

  constructor(...filesName: string[]) {
    DumpSQLite.dbDumpFilesName = filesName;
  }

  public run() {
    DumpSQLite.getDumpSql()
      .then((dumpSql) => {
        const db = DumpSQLite.openDatabase();
        return { db, dumpSql };
      })
      .then(({ db, dumpSql }) => {
        DumpSQLite.runQueries(db, dumpSql);
        return db;
      })
      .then((db) => {
        DumpSQLite.closeDatabase(db);
      })
      .catch((err) => console.error(err));
  }

  private static async getDumpSql() {
    return new Promise<string>((resolve, reject) => {
      try {
        const sqlFilesContent: string[] = [];

        this.dbDumpFilesName.forEach((fileName) => {
          const filePath = path.join(...this.dbDumpPath, fileName);
          sqlFilesContent.push(fs.readFileSync(filePath, 'utf-8'));
        });

        resolve(sqlFilesContent.join('\n\n'));
      } catch (err) {
        reject(err);
      }
    });
  }

  private static openDatabase() {
    if (fs.existsSync(this.dbSQLitePath)) fs.unlinkSync(this.dbSQLitePath);
    const db: Database = new Database(this.dbSQLitePath, (err) => {
      if (err) throw err;
    });
    console.log('Connected to SQLite database');
    return db;
  }

  private static runQueries(db: Database, queries: string) {
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

  private static closeDatabase(db: Database) {
    db.close((err) => {
      if (err) throw err;
    });
    console.log('Closed connection');
  }

  private static getQueries(queries: string) {
    return queries
      .replace(/(\r\n|\n|\r)/gm, '')
      .trim()
      .split(';');
  }
}
