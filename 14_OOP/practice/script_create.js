var UserList = {

    constructor: function(users) {
        this._users = users;
        return this;
    },

    showNames: function() {
        this._users.forEach(function(element) {
            console.log(element.firstName);
        });
        return this;
    },
    
    showById: function(id) {
        for (var i=0; i<this._users.length; i++) {
            if(this._users[i].id==id) {
                console.log(this._users[i]);
                return this;
            }
        }
        console.log("Unable to find user with id: " + id);
        return this;
    },

    add: function(firstName) {
        var that = this;
        function getRandom() {
            var random = Math.ceil(Math.random()*1e13);
            for (var i=0; i<that._users.length; i++){
                if(that._users[i].id == random) {
                    random = getRandom();
                }
            }
            return random;
        }

        var id = getRandom();

        this._users.push(
            {'id': id+'',
            'firstName': firstName,
            'lastName': '',
            'age': ''
            });
        console.log(firstName + ' with id='+ id + ' added');
        return this;
    },

    removeById: function(id) {
        for (var i=0; i<this._users.length; i++){
            if(this._users[i].id==id) {
                console.log("bye bye " + id + " (" + this._users[i].firstName + ")" );
                this._users.splice(i, 1);
                return this;
            }
        }
        console.log("Unable to find user with id: " + id);
        return this;
    },

    logUsersCount: function() {
        console.log(this._users.length);
        return this;
    }

}



var somes = [
    {
    "id": "1234567890123",
    "firstName": "Jon",
    "lastName": "Snow",
    "age": 30
    },
    {
    "id": "1485249082127",
    "firstName": "Max",
    "lastName": "Frai",
    "age": 32
    }, 
    {
    "id": "1485249082128",
    "firstName": "Kan",
    "lastName": "Der",
    "age": 33
    }
];




var list = Object.create(UserList).constructor(somes);




list.logUsersCount().showNames().add('Jack');
console.log('logUsersCount()');
list.logUsersCount();
console.log("list.add('Jef')");
list.add('Jef');
list.showNames();
list.logUsersCount();
console.log("list.add('Alex')");
list.add('Alex');
list.logUsersCount();
list.showNames();
console.log("showById(1485249082128)");
list.showById(1485249082128);
console.log("showById('1485249082128')");
list.showById('1485249082128');
console.log("showById('1485249082145')");
list.showById('1485249082145');
console.log("removeById('1485249082128')");
list.removeById('1485249082128');
console.log('logUsersCount()');
list.logUsersCount();
console.log('showNames()');
list.showNames();
