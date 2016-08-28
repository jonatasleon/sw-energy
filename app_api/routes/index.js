var express = require('express');
var router = express.Router();
var index = require('../controllers');

router.get('/pontos/', index.getAllPontos);
router.get('/pontos/add/', index.addPonto);
router.get('/pontos/state/', function(req, res, next) {
  res.send('value=255');
});

module.exports = router;
