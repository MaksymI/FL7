const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// const storage = require('./storageManipulation');

// app.use(bodyParser.json());

const findUserByName = (obj, name) => (obj.users.filter(element => element.username == name));

app.post('/api/users', function(req, res) {
    fs.readFile('storage.data', 'utf8', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        } else {
            let obj = JSON.parse(data);
            if (!(findUserByName(obj, req.body.username).length)) {
                res.status(409).send('user with given name already exist!');
            } else {
                obj.users.push(req.body);
                fs.writeFile(file, JSON.stringify(obj), 'utf8', function(err) { // write it back 
                    if (err) {
                        throw err
                    } else {
                        console.log('Adding user to file');
                    }
                res.status(201).send('user successfully added!')
            }
            
        }
    });
});

app.get('/api/users', function(req, res) {
    fs.readFile('storage.data', (err, data) => {
        if(err) {
            // console.log(err);
            console.error(err.stack);
            res.status(500).send('Error on server!');
            // res.statusCode = 500;
            // res.end('Error on server!');
            // return;
        }
        res.send(JSON.parse(data));
    });
});

const server = app.listen(3000, function() {
    console.log('listening on port ', server.address().port);
});




