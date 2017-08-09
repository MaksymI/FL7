// Exercise

// Process the variables that are passed-in through process.argv
// and output the first letter of words in a row.


var inputs = process.argv.slice(2);
var result = inputs.map(element => element[0]).reduce((prev, next) => prev + next);
console.log(result);
