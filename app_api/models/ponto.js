module.exports = function(sequelize, DataTypes) {
  var Ponto = sequelize.define('Ponto', {
    serial: DataTypes.INTEGER,
    placa: DataTypes.STRING,
    versao: DataTypes.FLOAT
  });
};
