/*-------------------------Interfaces in JS :)-------------------------------*/

function can(obj, methodName) {
     return ((typeof obj[methodName]) == "function");
}

function testQuack(obj) {
    if(!can(obj, 'quack')) { throw "Object should implement quack method" }
    obj.quack();
}

var someObj = {
   quack: function () {
       console.log('Quack! Quack!');
   }
}

testQuack(someObj); // Quack! Quack!

var someObj2 = {
   quackkkkk: function () {
       console.log('Quack! Quack!');
   }
}

testQuack(someObj); // Uncaught Object should implement quack method