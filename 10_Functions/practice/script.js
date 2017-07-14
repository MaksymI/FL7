// write function for greeting which accept name and call alert ‘hello’ + name,
// if name is not passed then alert ‘hello’ + anonim

function greeting (name='anonim') {
	alet (`hello ${name}`);
}

// write four functions for basic math operations (addition, substractions, multiplication, division),
//  function accepts two arguments and return result based on operation

function addition (a, b) {
	return a + b;
}

function substractions (a, b) {
	return a - b;
}

function multiplication (a, b) {
	return a * b;
}

function division (a, b) {
	return a / b;
}

// write function which accepts one of ‘+’, ‘-’, ‘*’, ‘/’ argument
// and returns new function(with two arguments)for basic math operations according to param you pass

function math_operation (arg) {
	switch (arg) {
  	case '+':
  		return addition;
  	case '-':
  		return substractions;
  	case '*':
  		return multiplication;
  	case '/':
  		return division;
  	default:
  		alert ('not a valid argument')
	}
}

// repeat previous task where new returned function has to be arrow

function math_operation (arg) {
	switch (arg) {
  	case '+':
  		return (a, b) => a + b;
  	case '-':
  		return (a, b) => a - b;
  	case '*':
  		return (a, b) => a * b;
  	case '/':
  		return (a, b) => a / b;
  	default:
  		alert ('not a valid argument')
	}
}

math_operation('-')(3, 6);

// write function each to iterate through array, first argument array,
// second function that will be called for each item in array (test it by using arrow function as well)

function each (arr, callback) {
	for (let i=0; i<arr.length; i++) {
		callback(arr[i]);
	}
}

// write function pow(x,n) which returns power(n) of num (x), default value of n is 2

function pow (x, n=2) {
	var res = x;
	for (let i=1; i<n; i++) {
		res = res*x
	}
	return res;
}

// write function which asks user (prompt) for number, then for power value and alert result

function for_pow () {
	var x = prompt ('please enter a number');
	var n = prompt ('please enter a power value');
	alert (pow (x, n));
}

for_pow ();


// write function sum which accepts arbitrary number of integer arguments and returns sum of them

function sum_arbitrary () {
	var res = 0;
	for (let i = 0; i<arguments.length; i++) {
		res = res + arguments[i];
	}

	return res;
}

console.log(sum_arbitrary(2,3,4,5,8,11));