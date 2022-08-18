import { DumpSQLite } from './dump-sqlite';

new DumpSQLite('create-sqlite.sql', 'insert.sql').run();
