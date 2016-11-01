var request = require('request');

var apiOptions = {
    server : 'https://aircraft-project-ameezy254.c9users.io/'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://intense-escarpment-29491.herokuapp.com";
}

var renderHomePage = function(req, res, responseBody){
    var message;
    if(!(responseBody instanceof Array)){
        message = "API lookup error";
        responseBody = [];
    }
    else {
        if (!responseBody.length){
            message = "No data found";
        }
    }
    res.render('flightSchema-list', {
        title: 'Airplane Service',
        pageHeader: {
            title: 'Airplane Service'
        },
        services: responseBody,
        message: message
    });
};

module.exports.homelist = function(req, res){
    var requestOptions, path;
    path = '/api/airplane' + req.params.climbTableId;
    path = '/api/airplane' + req.params.flapsTablesId;
    path = '/api/airplane' + req.params.landingTableId;
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {},
    };
};