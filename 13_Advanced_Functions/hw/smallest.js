// Write `largest()` and `smallest()` functions that returns the largest 
// and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
// Note:
// Checkout `max` and `min` functions in Math object

function smallest() {
    return Math.min.apply(null, arguments);
}

module.exports = smallest;