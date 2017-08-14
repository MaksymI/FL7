var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function (req, res) {
    fs.readFile('storage.data', function(err, info) {
        if(err) {
            console.log(err);
            res.statusCode = 500;
            res.end('Error on server!');
            return;
        }
        res.send(info);
    });
});