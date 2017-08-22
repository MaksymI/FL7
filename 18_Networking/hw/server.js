const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// const storage = require('./storageManipulation');

app.use(bodyParser.json());

// const users = {"users": []};

const createStorageFile = () => {
    fs.readFile('storage.data', 'utf8', (err, data) => {
        if(err && err.code == 'ENOENT') {
            fs.appendFile('storage.data', '{"users": []}', err => {
                if (err) throw err;
                console.log('storage.data created just now!');
              });
        }
    });
}

createStorageFile();

const findUserByName = (obj, name) => (obj.users.filter(element => element.username == name));

app.post('/api/users', (req, res) => {
    fs.readFile('storage.data', 'utf8', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        } else {
            let obj = JSON.parse(data);
            if (findUserByName(obj, req.body.username).length) {
                res.status(409).send('user with given name already exist!');
            } else {
                let toAdd = Object.assign({}, req.body);
                toAdd.id = obj.users.length ? Math.max(...obj.users.map(e => e.id))+1 : 0;
                obj.users.push(toAdd);
                fs.writeFile('storage.data', JSON.stringify(obj), 'utf8', err => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Adding user to file');
                    }
               });
               res.status(201).send('user successfully added!');            
            }
        }
    });
});


app.get('/api/users', (req, res) => {
    fs.readFile('storage.data', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        }
        res.send(JSON.parse(data));
    });
});

const server = app.listen(3000, () => {
    console.log('listening on port ', server.address().port);
});
