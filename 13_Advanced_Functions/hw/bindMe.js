// Write a polyfill for a .bind() function and save it in Function.prototype.bindMe().
// This way your bindMe function will be available for any function in your code same as apply,
// call and bind. myBind() should work in an exact same way as the usual bind() - take context
// as a first parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it.
// Your code should look like:
// Function.prototype.bindMe = function () {
//   // your code here
// }

// No need of module.exports for this one

// Invocation example:

// function addPropToNumber(number) { return this.prop + number; }
// var bound = addPropToNumber.bindMe({
//   prop: 9
// });
// bound(1)  // 10


Function.prototype.bindMe = function () {

}