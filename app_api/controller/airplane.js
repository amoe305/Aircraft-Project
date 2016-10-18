var mongoose = require('mongoose');
var climbTable = mongoose.model('ClimbTable');
var flapsTable = mongoose.model('FlapsTable');
var landingTable = mongoose.model('LandingTable');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.climbReadOne = function(req, res) {
  console.log('Finding climb details', req.params);
  if (req.params && req.params.climbTableId) {
    climbTable
      .findById(req.params.climbTableId)
      .exec(function(err, climbTable) {
        if (!climbTable) {
          sendJSONresponse(res, 404, {
            "message": "climbTableId not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(climbTable);
        sendJSONresponse(res, 200, climbTable);
      });
  } else {
    console.log('No climbTableId specified');
    sendJSONresponse(res, 404, {
      "message": "No climbTableId in request"
    });
  }
};

module.exports.flapsReadOne = function(req, res) {
  console.log('Finding flap details', req.params);
  if (req.params && req.params.flapsTablesId) {
    flapsTable
      .findById(req.params.flapsTablesId)
      .exec(function(err, flapsTable) {
        if (!flapsTable) {
          sendJSONresponse(res, 404, {
            "message": "flapsTablesId not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flapsTable);
        sendJSONresponse(res, 200, flapsTable);
      });
  } else {
    console.log('No flapsTablesId specified');
    sendJSONresponse(res, 404, {
      "message": "No flapsTablesId in request"
    });
  }
};

module.exports.landingReadOne = function(req, res) {
  console.log('Finding landing details', req.params);
  if (req.params && req.params.landingTableId) {
    landingTable
      .findById(req.params.landingTableId)
      .exec(function(err, landingTable) {
        if (!landingTable) {
          sendJSONresponse(res, 404, {
            "message": "landingTableId not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(landingTable);
        sendJSONresponse(res, 200, landingTable);
      });
  } else {
    console.log('No landingTableId specified');
    sendJSONresponse(res, 404, {
      "message": "No landingTableId in request"
    });
  }
};

