var express = require('express');
var router = express.Router();

var loadImg = require('./loadImg');
var getszinfo = require('./getszinfo');
var saveData = require('./saveData');
var adjust = require('./adjust');
router.get('/loadImg',loadImg);
router.get('/Getszinfo',getszinfo);
router.get('/saveData',saveData);
router.get('/adjust',adjust);
module.exports = router;
