// forEach - write function which takes array and function
// as arguments and runs that function per each element in array.
// Also that function should be invoked with that array element.


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


function cypherPhrase (obj, str) {
    return getTransformedArray(str.split(''), function(element){
                return obj[element] || element;
            }).join('');
}

var charactersMap = {a: 'o', c: 'd', t: 'g'};
console.log(cypherPhrase( charactersMap, 'kitty cat' )); // -> “kiggy dog”


// decypherPhrase - write function which takes object and string
// cyphered with cypherPhrase function and returns string back to normal.
// Note: reuse your cypherPhrase function
// Tip: easiest way to solve this task is to reverse key-value in charactersMap


function decypherPhrase (obj, str) {
    var newObj = {};
    for (var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            newObj[obj[prop]] = prop;
        }
    }
    return cypherPhrase (newObj, str);
}

console.log(decypherPhrase( charactersMap, 'kiggy dog' )); // -> “kitty cat”


// getTopNRichestNames - write function which takes number that indicates
// how many names should function return in array and array of objects in a form of 
// { name: ‘Bill Hatso’, income: ‘5B’ } where ‘B’ stands for billion. 
// Note: other possible numeric abbreviations : K - thousands, M - millions.
// Note: income is NOT going to be of a complex expression such as ‘5B33M135K’,
// only 1 number and 1 string representing numeric abbreviation.
// Note: use Array.prototype.sort, Array.prototype.map and your pluckByAttribute functions.
// Tip: for your own convenience you can use 1e9 instead of 1000000000 which pretty much
// means 10 to the power of 9 in JavaScript.


function getTopNRichestNames(num, arr) {
    var abbreviations = {
        'B': 1e9,
        'M': 1e6,
        'K': 1e3
    };
    var numericIncom = arr.map(function(obj) { 
        var rObj = {};
        rObj.name = obj.name;
        rObj.income = obj.income[0]*abbreviations[obj.income[1]];
        return rObj;
    });
    numericIncom.sort((a,b)=>(b.income - a.income));
    var nameByIncome = pluckByAttribute(numericIncom, 'name');
    return nameByIncome.slice(0, num);
}

var people = [
    {name: 'Bara', income: '1B'},
    {name: 'Dara', income: '5B'},
  	{name: 'Kara', income: '1M'},
  	{name: 'Zara', income: '2K'}
];
console.log(getTopNRichestNames(2, people)); // -> [ 'Dara', 'Bara' ]
console.log(getTopNRichestNames(3, people)); // -> [ 'Dara', 'Bara', ‘Kara’]
console.log(getTopNRichestNames(100, people)); // -> [ 'Dara', 'Bara', ‘Kara’, ‘Zara’ ]