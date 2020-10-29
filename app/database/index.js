const { Sequelize } = require('sequelize');
export default new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/aluno.sqlite'
});