import { DumpSQLite } from './dump-sqlite';

const create = 'create-sqlite.sql';
const insert = 'insert.sql';

const filesName = [create, insert];

new DumpSQLite(...filesName).run();
