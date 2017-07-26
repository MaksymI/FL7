// Write fibonacci() function that returns n-th Fibonacci number.
//  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
//  Each subsequent number is the sum of the previous two. Using recursion is mandatory.
// You will get additional bonus points for this task in case your function works for very big numbers.
// Hint: in order to make the function work with big numbers - use a technique called memoization -
//  cache the results of previous function calls somewhere inside your function.

// Invocation example:
// fibonacci(0)	// 0
// fibonacci(1)	// 1
// fibonacci(3)	// 2
// fibonacci(6)	// 8
// fibonacci(25)	// 75025
// fibonacci(999)	// 2.686381002448534e+208

var fibonacci = (function() {
    var cache = {};

    function fib(n) {
        var result;
        if (n in cache) {
            console.log('Fetching from cache');
            result = cache[n];
        } else if (n == 0 || n == 1) {
            result = n;
        } else {
            console.log('Calculating result');
            result = fib(n-1) + fib(n-2);
        }
        cache[n] = result;
        return result;
    }

    return fib;  
})();

