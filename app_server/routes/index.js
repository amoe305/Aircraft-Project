var express = require('express');
var router = express.Router();
var ctrlAirplaneData = require('../controllers/airplane');



router.get('/', ctrlAirplaneData.homelist);
router.get('/airplane/:climbTableId', ctrlAirplaneData.homelist);
router.get('/airplane/:flapsTablesId', ctrlAirplaneData.homelist);
router.get('/airplane/:landingTableId', ctrlAirplaneData.homelist);

module.exports = router;
