var express = require('express');
var app = express();

var execPHP = require('./execphp.js')();

execPHP.phpFolder = '/home/esigelec1/beesmart/Php/';

app.use('*.php',function(request,response,next) {
        execPHP.parseFile(request.originalUrl,function(phpResult) {
                response.send(phpResult);
                response.end();
        });
});

app.listen(3000, function () {
        console.log('Node server listening on port 3000!');
});