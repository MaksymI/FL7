// Rewrite the following code using the new Computed Property method:

    // var evenOrOdd = +process.argv[2];
    // var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
    // var sum = +process.argv[3] + evenOrOdd;
    // var obj = {};
    // obj[evenOrOddKey] = evenOrOdd;
    // obj[sum] = sum;
    // console.log(obj);

// Try to solve it without any temporary variable.

var obj = {
  [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
  [+process.argv[3] + +process.argv[2]]: +process.argv[3] + +process.argv[2]
};