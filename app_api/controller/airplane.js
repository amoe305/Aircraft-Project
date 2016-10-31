var mongoose = require('mongoose');
var climbTable = mongoose.model('ClimbTable');
var flapsTable = mongoose.model('FlapsTable');
var landingTable = mongoose.model('LandingTable');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var buildClimbTableList = function(req, res, results, stats){
  var climbTable = [];
  results.forEach(function(doc){
    climbTable.push({
      weight: doc.obj.weight,
      vfri5: doc.obj.vfri5,
      vfri10: doc.obj.vfri10,
      vfri15: doc.obj.vfri5,
      vclmb: doc.obj.vclmb,
      _id: doc.obj.id
    });
  });
  return climbTable;
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

var buildFlapsTableList = function(req, res, results, stats){
  var flapsTable = [];
  results.forEach(function(doc){
    flapsTable.push({
      flaps: doc.obj.flaps,
      weight: doc.obj.weight,
      altitude: doc.obj.altitude,
      temperature: doc.obj.temperature,
      vr: doc.obj.vr,
      v2: doc.obj.v2,
      _id: doc.obj.id
    });
  });
  return flapsTable;
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

var buildLandingTableList = function(req, res, results, stats){
  var landingTable = [];
  results.forEach(function(doc){
    landingTable.push({
      flaps: doc.obj.flaps,
      weight: doc.obj.weight,
      vapp: doc.obj.vapp,
      vref: doc.obj.vref,
      vga: doc.obj.vga,
      _id: doc.obj.id
    });
  });
  return landingTable;
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

