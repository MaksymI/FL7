// Find and display total sum of numbers from 1 to 3;

var sum = 0;

for (var i=0; i<=3; i++) {
	sum = sum + i;
}
console.log(`Sum of numbers from 1 to 3 = ${sum}`);

// Find and display total sum of numbers from 20 to 220;
var sum2 = 0;
for (var i=20; i<=220; i++) {
	sum2 = sum2 + i;
}
console.log(`Sum of numbers from 20 to 220 = ${sum2}`);

// Display even numbers from 1 to 20 by using for loop.
// do it without using ‘continue’

for (var i=0; i<=20; i++) {
	if (i%2 === 0) {
		console.log(i);
	}
}

// do it with using ‘continue’

for (var i=0; i<=20; i++) {
	if (i%2 === 0) {
		console.log(i);
	}

}


// Display odd numbers from 10 to 30 by using ‘while’ loop.

var j = 9;
while (j<29) {
	j=j+2;
	console.log(j)
}

// Display numbers from 1 to 15 using ‘for’ loop, once num of iteration
// is equal the number of month of your birthday then stop execution of loop 

for (var i=1; i<=15; i++) {
	if (i === 7) {
		break;
	}
	console.log(i);
}

// Rewrite code from using ‘for’ to using ‘while’ and ‘do while’
// for(var i = 0; i < 5; i++) {
//     console.log(`number ${i}  =)`)
// }

var i=0;
while (i<5) {
	console.log(`number ${i}  =)`);
	i++;
}

var i=0;
do {
	console.log(`number ${i}  =)`);
	i++;
} while (i<5)

// Write code which will ask user (prompt ) to put number greater than 100,
// repeat prompt until user put required number, then display result of prompt
//    do it using ‘while’
//    do it using ‘do while’

// var res = prompt ("put number greater than 100");
// while (res > 100) {
// 	alert (res);
// 	break;
// }

// do {
// 	var res = prompt ("put number greater than 100");

// 	if (res > 100)
// 	alert (res);
// 	break;
// } while (res > 100)

// Show in console using for.
var hash = "#";
for (i=1; i<=8; i++) {
	console.log(hash);
	hash=hash+"#";
}

// Ask user (prompt) to choose a task from 1 to 8.
// Use switch to run appropriate code.
// If user entered not an expected value, ask again


do {
var task = prompt ("choose a task from 1 to 8");
} while (isNaN(task) || (parseInt(task) < 1) || (parseInt(task) > 8))

switch (parseInt(task)) {
  case 1:
    console.log("user entered 1");
    break;
  case 2:
    console.log("user entered 2");
    break;
  case 3:
    console.log("user entered 3");
    break;
  case 4:
    console.log("user entered 4");
    break;
  case 5:
    console.log("user entered 5");
    break;
  case 6:
    console.log("user entered 6");
    break;
  case 7:
    console.log("user entered 7");
    break;
   case 8:
    console.log("user entered 8");
    break;
}

// Display prime numbers from 0 to the number that user entered in a prompt.

do {
var num = prompt ("please enter a number");
} while (isNaN(num))



for (var j=2; j <= num; j++) {
	
	var prime = true;

	for(var i = 2; i < j; i++) {
	    if(j % i === 0) {
	    	prime = false;
	    	break;
		}
	}

	if (prime) {
		console.log(j);
	}
}


