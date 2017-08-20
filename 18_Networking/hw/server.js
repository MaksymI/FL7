var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/message', function(req, res) {
    console.log(req.body);
    res.status(200);
})

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

var server = app.listen(3000, function() {
    console.log('listening on port ', server.address().port);
});




