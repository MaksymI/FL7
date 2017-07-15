// isBigger - a function which accepts two arguments and returns true if first one
// has greater value than second one or false otherwise.  
// E.g: isBigger(5, -1); // => true
// Tip: no need for if/else clause nor ternary operator

function isBigger (a, b) {
    return a>b;
}

console.log(isBigger(5, -1));


// isSmaller - a function which accepts two arguments and returns true if first one
// has lesser value than second one or false otherwise.
// E.g. isSmaller(5, -1); // => false
// Tip: consider reusing isBigger function

function isSmaller (a, b) {
    return !isBigger(a, b);
}

console.log(isSmaller(5, -1));


// getMin - a function which accepts arbitrary number of integer arguments
// and returns the one with the smallest value.
// E.g. getMin(3, 0, -3); // => -3
// Tip: since arguments is like array, you can use simple iteration over it
// and use arguments[ i ] to get the argument of a given index

function getMin () {
    var min = arguments[0];
    for (let i = 1; i<arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(getMin(3, 0, -3));


// isPrime - a function which accepts one integer argument and returns true
// if it is prime number or false otherwise

function isPrime (num) {
    var prime = true;
	for(var i = 2; i < num; i++) {
	    if(num % i === 0) {
	    	prime = false;
	    	break;
		}
    }
    return prime;
}


// getClosestToZero - a function which accepts arbitrary number of integer 
// arguments and returns one closest to 0 (zero).
// E.g. getClosestToZero(9, 5, -4, -9); // => -4
// 	Tip: Math.abs() might be helpful

function getClosestToZero () {
    var min = Math.abs(arguments[0]);
    var closestToZero = arguments[0];
    for (let i = 1; i<arguments.length; i++) {
        if ( Math.abs(arguments[i]) < min) {
            min =  Math.abs(arguments[i]);
            closestToZero = arguments[i];
        }
    }
    return closestToZero;
}

console.log(getClosestToZero(9, 5, -4, -9));