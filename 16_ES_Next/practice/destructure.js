// var foo = 123;
// var bar = 456;
    
//     // swapping of the value
//     [bar, foo] = [foo, bar];

// It is even possible to access elements that are children of the array.

//     var [a, [b], [c]] = ['hello', [', '], ['world']];
    
//     console.log(a + b + c);// hello, world
//     // the value of a is "hello", b is ", " and c is "world"

// It can also be used to access the properties of objects:

//     var pt = {x: 123, y: 444};
//     var {x, y} = pt;
//     console.log(x, y); // 123 444

// # Exercise

// Use destructuring to extract name.family and birth.day from the following JavaScript object:

var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};


let {name: {family: familyName}, birth: {day: birthDay}} = json;


console.log(familyName);
console.log(birthDay);