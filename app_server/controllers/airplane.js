var request = require('request');

var apiOptions = {
    server : 'https://aircraft-project-ameezy254.c9users.io/'
};
if(process.env.NODE_ENV === 'production'){
    apiOptions.server = "https://intense-escarpment-29491.herokuapp.com/"
}