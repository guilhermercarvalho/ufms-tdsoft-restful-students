const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./app/database/aluno.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the aluno database.')
});
 
module.exports = db;