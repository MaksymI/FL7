var fs = require('fs');

var users = {
	"users": []
};

var newUser = {
    "id": 4,
    "username": "johndoesfriendfriend",
    "email": "friend.of.john.doe@myownserver.com"
    };

var json = JSON.stringify(users);

const findUserByName = (obj, name) => (obj.users.filter(element => element.username == name));
const userExist = findUserByName.length;




function checkFile(file) {
    return fs.stat(file, function(err, stat) {
        if(err == null) {
            console.log('File exists');
            return true;
        } else if(err.code == 'ENOENT') {
            // file does not exist
            return false;;
        } else {
            console.log('Some other error: ', err.code);
        }
    });
}

function readFromFile(file) {
    var res;
    fs.readFile(file, 'utf8', function(err, data) {
        if(err) {
            console.log(err);
            throw err;
        } else {
            // console.log(JSON.parse(data));
            res = JSON.parse(data);
            console.log(res);
            // return JSON.parse(data);
        }
    });
    return res;
}

function appendToFile(file, userObject) {
    var obj;
    fs.readFile(file, 'utf8', function readFileCallback(err, data){
        if(err) {
            console.log(err);
            throw err;
        } else {
            obj = JSON.parse(data); //now it an object
            obj.users.push(userObject);
            fs.writeFile(file, JSON.stringify(obj), 'utf8', function(err) { // write it back 
                if (err) {
                    throw err
                } else {
                    console.log('Adding user to file');
                }
            });
        }
    });
    return obj;
}

// var res1 = readFromFile('storage.data');
// console.log(res1);

// console.log(readFromFile('storage.data'));

// appendToFile('storage.data', newUser);

module.exports = {
    appendToFile: function(file, userObject) {
        var obj;
        fs.readFile(file, 'utf8', function readFileCallback(err, data){
            if(err) {
                console.log(err);
                throw err;
            } else {
                obj = JSON.parse(data); //now it an object
                obj.users.push(userObject);
                fs.writeFile(file, JSON.stringify(obj), 'utf8', function(err) { // write it back 
                    if (err) {
                        throw err
                    } else {
                        console.log('Adding user to file');
                    }
                });
            }
        });
        return obj;
    },

    readFromFile: function(file) {
        return fs.readFile(file, 'utf8', function(err, data){
            if(err) {
                console.log(err);
                throw err;
            } else {
                return JSON.parse(data);
            }
        });
    }
}