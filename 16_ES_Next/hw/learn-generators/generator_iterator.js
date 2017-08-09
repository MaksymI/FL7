// ## Task

// Write a generator function factorial that, given an input number, starts at 1 and goes
// up to the number, yielding the factorial of each number along the way.

// Don't use recursion. Use a loop.

// Follow this boilerplate:

// n! = n * (n - 1) * (n - 2) * ...*1

function *factorial(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
        yield res; 
    }
}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120