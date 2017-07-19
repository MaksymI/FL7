// forEach - write function which takes array and function
// as arguments and runs that function per each element in array.
// Also that function should be invoked with that array element.
// Invocation example: 
//    forEach( [3, 5, 2], function(el){ console.log(el) } ) // -> 3 5 2

function forEach(arr, fn) {
    for (var item of arr) {
        fn(item);
    }
}

forEach( [3, 5, 2], function(el){ console.log(el) } ); // -> 3 5 2


// getTransformedArray - write function which takes array and function
// as arguments and returns new array with every element being transformed by that function.
// Note: reuse your forEach function, treat it as just an easy way to write your ordinary ‘for’
// iterator, and the function you pass to it as just a body of that iterator.
// Invocation example: 
//   function increment(num){ return num + 1 } // just returns incremented number
//   getTransformedArray( [1, 7, 20], increment ); // -> [ 2, 8, 21 ]

function getTransformedArray (arr, fn) {
    var output = [];
    forEach(arr, function(element){
         output.push(fn(element));
    });
    return output;
}

function increment(num){ return num + 1 };
console.log(getTransformedArray( [1, 7, 20], increment )) // -> [ 2, 8, 21 ]


// pluckByAttribute - write function which takes array of objects and label
// of object attribute and returns array of values by that label.
// Note: reuse your getTransformedArray function.
// Tip: No need to create new array by yourself - getTransformedArray already does that
// Invocation example:
//   var presidents = [ { name: ‘George’, surname: ‘Kush’ } ,
//                                { name: ‘Barako’, surname: ‘Obaame’ } ];
//   pluckByAttribute( presidents, ‘name’ ); // -> [‘George’, ‘Barako’]


function pluckByAttribute (arr, label) {
    return getTransformedArray (arr, function(element){
            return element[label];
    });
}

var presidents = [ { name: 'George', surname: 'Kush' } ,
                    { name: 'Barako', surname: 'Obaame' } ];

console.log(pluckByAttribute( presidents, 'name' )) // -> [‘George’, ‘Barako’]


// cypherPhrase - write function which takes object and string and returns
// string transformed by object rules.
// Note: reuse your getTransformedArray function, don’t forget about 
// Array.prototype.join to transfrom array back into string.
// Tip: (falsy || ‘truthy’) returns ‘truthy’. e.g. var obj = { };
// var letter = obj[‘a’] || ‘a’; // -> ‘a’, because obj[‘a’] would return ‘undefined’ which is falsy.
// Tip: you can treat strings as just array of characters.
// Invocation example:
//   var charactersMap = {a: ‘o’, c: ‘d’, t: ‘g’}
//   cypherPhrase( charactersMap, ‘kitty cat’ ); // -> “kiggy dog”




// decypherPhrase - write function which takes object and string
// cyphered with cypherPhrase function and returns string back to normal.
// Note: reuse your cypherPhrase function
// Tip: easiest way to solve this task is to reverse key-value in charactersMap
// Invocation example:
//   var charactersMap = {a: ‘o’, c: ‘d’, t: ‘g’}
//   decypherPhrase( charactersMap, ‘kiggy dog’ ); // -> “kitty cat”
