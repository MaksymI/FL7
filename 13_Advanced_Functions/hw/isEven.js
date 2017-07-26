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

module.exports = isEven;