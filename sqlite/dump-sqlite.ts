import fs from 'fs';
import path from 'path';
import { Database } from 'sqlite3';

export class DumpSQLite {
  private readonly DB_DUMP_PATH = path.join(__dirname, 'dump');
  private readonly DB_SQLITE_PATH = path.join(__dirname, 'student.sqlite');
  private readonly DB_UUID_EXTENSION_PATH = path.join(__dirname, 'lib', 'uuid');

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
        this.loadExtentionUUID(db);
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

  private async getDumpSql(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const sqlFilesContent: string[] = [];

        this.dbDumpFilesName.forEach((fileName) => {
          const filePath = path.join(this.DB_DUMP_PATH, fileName);
          sqlFilesContent.push(fs.readFileSync(filePath, 'utf-8'));
        });

        resolve(sqlFilesContent.join('\n\n'));
      } catch (err) {
        reject(err);
      }
    });
  }

  private openDatabase(): Database {
    if (fs.existsSync(this.DB_SQLITE_PATH)) fs.unlinkSync(this.DB_SQLITE_PATH);

    const db: Database = new Database(this.DB_SQLITE_PATH, (err) => {
      if (err) throw err;
    });

    console.log('Connected to SQLite database');

    return db;
  }

  loadExtentionUUID(db: any) {
    db.loadExtension(this.DB_UUID_EXTENSION_PATH);
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
