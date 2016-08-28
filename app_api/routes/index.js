var express = require('express');
var router = express.Router();
var index = require('../controllers');

router.get('/pontos/', index.getAllPontos);
router.get('/pontos/add/', index.addPonto);
router.get('/pontos/state/', index.getState);
router.post('/pontos/state/', index.setState);

router.get('/leituras/last', index.getLastLeitura);
router.get('/leituras/', index.setLeitura);

module.exports = router;
