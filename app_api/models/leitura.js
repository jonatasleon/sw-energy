'use strict';
module.exports = function(sequelize, DataTypes) {
  var Leitura = sequelize.define('Leitura', {
    corrent: DataTypes.FLOAT,
    tensao: DataTypes.FLOAT,
    tempo: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Leitura.belongsTo(models.Ponto);
      }
    }
  });
  return Leitura;
};
