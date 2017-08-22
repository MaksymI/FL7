const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

const createStorageFile = () => {
    fs.readFile('storage.data', (err, data) => {
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
const findUserById = (obj, id) => (obj.users.filter(element => element.id == id));
const findUserIndexById = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return i;
        }
    }
    return null;
}


app.post('/api/users', (req, res) => {
    fs.readFile('storage.data', (err, data) => {
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
        let obj = JSON.parse(data);
        res.send(obj.users);
    });
});


app.get('/api/users/:id', (req, res) => {
    fs.readFile('storage.data', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        } else {
            let obj = JSON.parse(data);
            if (!findUserById(obj, req.params.id).length) {
                res.status(404).send('user with given id was not found!');
            } else {
                res.status(200).send(findUserById(obj, req.params.id)[0]);            
            }
        }
    });
});


app.put('/api/users/:id', (req, res) => {
    fs.readFile('storage.data', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        } else {
            let obj = JSON.parse(data);
            if (!findUserById(obj, req.params.id).length) {
                res.status(404).send('user with given id was not found!');
            } else {
                let indexOfUser = findUserIndexById(obj.users, req.params.id);
                obj.users[indexOfUser] = req.body;
                obj.users[indexOfUser].id = req.params.id;
                fs.writeFile('storage.data', JSON.stringify(obj), 'utf8', err => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Replacing user data by id ' + req.params.id);
                    }});
                res.status(200).send(obj.users[indexOfUser]);         
            }
        }
    });
});


app.delete('/api/users/:id', (req, res) => {
    fs.readFile('storage.data', (err, data) => {
        if(err) {
            console.error(err.stack);
            res.status(500).send('Error on server!');
        } else {
            let obj = JSON.parse(data);
            if (!findUserById(obj, req.params.id).length) {
                res.status(404).send('user with given id was not found!');
            } else {
                let indexOfUser = findUserIndexById(obj.users, req.params.id);
                obj.users.splice(indexOfUser, 1);
                fs.writeFile('storage.data', JSON.stringify(obj), 'utf8', err => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Deleting user from file');
                    }});
                res.status(200).send({
                    message: "User has been successfully removed."
                });            
            }
        }
    });
});


const server = app.listen(3000, () => {
    console.log('listening on port ', server.address().port);
});
