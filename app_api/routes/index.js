var express = require('express');
var router = express.Router();
var index = require('../controllers/app.js');

router.get('/', index.demo);

module.exports = router;
