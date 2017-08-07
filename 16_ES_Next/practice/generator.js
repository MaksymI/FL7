// let fibonacci = function*(){
//   let pre = 0, cur = 1;
//   while (pre < 1000) {
//     // Here we destruct the former state
//     [pre, cur] = [cur, pre + cur];
//     // and yield (return) each step
//     yield pre;
//   }
// }();
  
// for (var n of fibonacci) {
//   console.log(n);
// }

const max = +process.argv[2];

let FizzBuzz = function*(){
  let num = 1;
  while (num <= max) {
    let value = num;

      if (value % 15 === 0) {
        value = 'FizzBuzz';
      } else if (value % 3 === 0) {
        value = 'Fizz';
      } else if (value % 5 === 0) {
        value = 'Buzz';
      }
      num++;
    yield value;
  }
}();

    
for (var n of FizzBuzz) {
  console.log(n);
}

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     const max = process.argv[2];
//     let FizzBuzz = function* (){
//       let num = 1;
//       while (num <= max) {
//         let value = num;
//         num++;
//         if (value % 15 === 0) {
//           value = 'FizzBuzz';
//         } else if (value % 3 === 0) {
//           value = 'Fizz';
//         } else if (value % 5 === 0) {
//           value = 'Buzz';
//         }
//         yield value;
//       }
//     }();
    
//     for (var n of FizzBuzz) {
//       console.log(n);
//     }

// ────────────────────────────────────────────────────────────────────────────────

