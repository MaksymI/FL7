// Write `isEven()` function that takes one argument
//  and returns true if the number is even, and false if the number is odd.
//  Using recursion is mandatory.

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}


// Write `largest()` and `smallest()` functions that returns the largest 
// and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
// Note:
// Checkout `max` and `min` functions in Math object

function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}



// Write `compose` function which performs right-to-left function composition.
// Note: this function shouldn’t have limitaion on count of passed function
// Invocation example:
// const compose = require('./compose');
// const toUpper = string => string.toUpperCase();
// const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName;
// const yellGreeting = compose(toUpper, classyGreeting);
// yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"


function compose() {
    return Array.prototype.reduceRight.call(arguments, function(prev, cur){
        return function(){
            return cur(prev.apply(null, arguments));
        };   
    });
}