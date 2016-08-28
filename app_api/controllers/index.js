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
        serial: req.query['SERIAL']
      }
    })
    .then(function(ponto) {
      if(!ponto)
        ponto = {estado: 0};
      res.json(ponto.estado);
    });
};
