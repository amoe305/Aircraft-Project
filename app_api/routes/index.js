var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controller/airplane');

router.get('/airplane/:climbTableId', ctrlAirplaneData.climbReadOne);
router.get('/airplane/:flapsTablesId', ctrlAirplaneData.flapsReadOne);
router.get('/airplane/:landingTableId', ctrlAirplaneData.landingReadOne);

module.exports = router;
