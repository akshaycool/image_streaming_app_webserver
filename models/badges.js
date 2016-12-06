'use strict';
var request = require('request');

exports.get = function(callback){
    request('http://localhost:8080/badges',function(err,response,body){
        callback(error,JSON.parse(body));
    });
};