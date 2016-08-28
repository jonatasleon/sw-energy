var models = require('../models');

module.exports.getAllPontos = function(req, res, next) {
  models.Ponto.findAll().then(function(pontos) {
    res.json(pontos);
  });
};

module.exports.addPonto = function(req, res, next) {
  var ponto = {
    serial: req.query['SERIAL'],
    placa: req.query['PLACA'],
    versao: req.query['VERSAO']
  };

  models.Ponto.create(ponto).then(function(ponto) {
    res.json(ponto);
  });
};

module.exports.getState = function(req, res, next) {
  models.Ponto
    .findOne({
      where: {
        serial: parseInt(req.query['SERIAL'], 10)
      }
    })
    .then(function(ponto) {
      if (!ponto)
        ponto = {
          estado: 0
        };
      res.json('value=' + ponto.estado);
    });
};

module.exports.setState = function(req, res, next) {
  var n = parseInt(req.body['SERIAL'], 10);

  models.Ponto
    .findOne({
      where: {
        serial: n
      }
    })
    .then(function(ponto) {
      if (!ponto) {
        res.status(400).json({
          msg: 'ERROR'
        });
        return;
      }

      ponto.estado = parseInt(req.body['ESTADO'], 10);
      ponto.save();
      res.json(ponto);
    });
};

// corrent: DataTypes.FLOAT,
// tensao: DataTypes.FLOAT,
// tempo: DataTypes.DATE

module.exports.setLeitura = function(req, res, next) {
  models.Leitura
    .create({
      corrent: parseFloat(req.query['CORRENTE']),
      tensao: parseFloat(req.query['TENSAO']),
      tempo: Date.now()
    })
    .then(function(leitura) {});
};

module.exports.getLastLeitura = function(req, res, next) {
  models.Leitura
    .findOne({
      attributes: ['corrent', 'tensao', 'tempo'],
      order: [
        ['id', 'DESC']
      ]
    })
    .then(function(leitura) {
      var d = {};
      d.corrente = leitura.corrent;
      d.tensao = leitura.tensao;
      d.tempo = leitura.tempo;

      res.json(d);
    });
};

module.exports.tempoAtivo = function(req, res, next) {
  // models.Leitura
  //   .findOne({
  //     attributes: ['tempo'],
  //     where: {
  //       $or: [
  //         {corrent: 0},
  //
  //       ]
  //     }
  //   })
};
