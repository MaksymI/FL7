var fs = require('fs');

var users = {
	"users": []
};

var newUser = {
    "id": 3,
    "username": "johndoesfriendfriend",
    "email": "friend.of.john.doe@myownserver.com"
    };

var json = JSON.stringify(users);

function checkFileExists(file) {
    return fs.exists(file, function(exists) {
        console.log("file exists ? " + exists);
        return exists;
    });
}





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
    return fs.readFile(file, 'utf8', function readFileCallback(err, data){
        if(err) {
            console.log(err);
            throw err;
        } else {
            return JSON.parse(data);
        }
    });
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



var exist = fs.existsSync('storage.data');

console.log(exist);

// appendToFile('storage.data', newUser);