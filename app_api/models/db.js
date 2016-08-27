var Sequelize = require('sequelize');

var sequelize = new Sequelize('sw_energy', 'root', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
