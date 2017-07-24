// write function countDown.
// function expects number and logs values one by one till zero.
// Note: function should use recursion and ternary operator.
// Note: function’s second line should be started with return keyword.
// Invocation example:
// countDown(3); // 3 2 1 0

function countDown (num) {
  console.log(num);
  return (--num) ? countDown(num) : 0; 
}



// write function add.
// function expects two numbers and returns a compound result of them.
// Note: function may be called with either 2 arguments simultaneously or 1 by 1.
// Invocation example:
// add(1, 2); // 3
// add(1)(2); // 3

function add(a,b){
  if (b) {
    return a+b;
  } else {
    return function(b) {
      return a+b;
    }
  }
}
// add(5)(7) --> 12
// add(5, 7) --> 12



// write function sum.
// function expects arbitrary number of digit arguments and returns compound value of them.
// Note: function should use reduce method of Array.prototype.
// Note: function’s code should be started with return keyword.
// Invocation example:
// sum(1, 2,); // 3
// sum(1, 2, 3); // 6

function sum () {
  return Array.prototype.reduce.call(arguments, function(a,b){return a+b});
}



// We have an array of numbers and we want to add the 
// even numbers to the resulting array twice, but the odd numbers only once.
// yourFn([1, 2, 3, 4]) // [1, 2, 2, 3, 4, 4]

function addEvenTwice (arr) {
  return arr.reduce(function(prev, next){
    if(next%2){
      prev.push(next);
    } else {
      prev.push(next);
      prev.push(next);
    }
    return prev;
  }, []);
}
// addEvenTwice([1,2,3,4,5,6]) --> [ 1, 2, 2, 3, 4, 4, 5, 6, 6 ]



// write function reduce.
// method applies a function against an accumulator and each value of the array
//  (from left-to-right) to reduce it to a single value.
// Invocation example:
// var lib = [‘abba’,  ‘baba’];
// var add = function(a, b) { return a + b; };
// var accumulator = ‘’;
// reduce(lib, add, accumulator); // ‘abbababa

function reduce (arr, fn, accum) {
  for (let i=0; i<arr.length; i++){
    accum = fn(accum, arr[i]);
  }
  return accum;
}
// reduce(lib, add, accumulator) --> 'abbababa'



// write countDown function that logs output values with 1 second delay
function countDownDelay (num) {
  console.log(num);
  return (--num) ? setTimeout(function(){countDownDelay(num);}, 1000) : 0; 
}
