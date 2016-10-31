var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controller/airplane');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/airplane/:climbTableId', ctrlAirplaneData.climbReadOne);
router.get('/airplane/:flapsTablesId', ctrlAirplaneData.flapsReadOne);
router.get('/airplane/:landingTableId', ctrlAirplaneData.landingReadOne);

module.exports = router;
