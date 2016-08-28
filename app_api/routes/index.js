var express = require('express');
var router = express.Router();
var index = require('../controllers');

router.get('/pontos/', index.getAllPontos);
router.get('/pontos/add/', index.addPonto);
router.get('/pontos/state/', index.getState);

module.exports = router;
