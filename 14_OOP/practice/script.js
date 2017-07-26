function UserList(users) {

    var _users = users;

    this.showNames = function(){
        _users.forEach(function(element){
            console.log(element.firstName);
        });
        
        return this;
    }

    this.showById = function(id){

        for (var i=0; i<_users.length; i++){
            if(_users[i].id==id) {
                console.log(_users[i]);
                return this;
            }
        }
        
        console.log("Unable to find user with id: " + id);
       
        return this;
    }

    this.add = function(firstName){
       
        function getRandom(){
           var random = Math.ceil(Math.random()*1e13);
                for (var i=0; i<_users.length; i++){
                    if(_users[i].id == random) {
                        random = getRandom();
                    }
                }
            return random;
        }

        var id = getRandom();

        _users.push(
            {'id': id.toString,
             'firstName': firstName,
             'lastName': '',
             'age': ''
            });
        
        console.log(firstName + ' with id='+ id + ' added')

        return this;
    }
        
    this.removeById = function(id){
        for (var i=0; i<_users.length; i++){
            if(_users[i].id==id) {
                console.log("bye bye " + id + " " + _users[i].firstName );
                _users.splice(i, 1);
                return this;
            }
        }
        console.log("Unable to find user with id: " + id);
        return this;
    }

    this.logUsersCount = function(){
        console.log(_users.length);
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

var list = new UserList(somes);

list.logUsersCount().showNames().add('Kirilov');


console.log('logUsersCount()');
list.logUsersCount();
console.log("list.add('Izmailov')");
list.add('Izmailov');
list.showNames();
list.logUsersCount();
console.log("list.add('Smirnoff')");
list.add('Smirnoff');
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
