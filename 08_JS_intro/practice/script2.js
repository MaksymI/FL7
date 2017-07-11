var a, b, c, result;

a = 3;
b = 4;
c = 5;

var p=(a+b+c)/2;

result = Math.sqrt(p*(p-a)*(p-b)*(p-c));


alert(`Triangle with a = ${a}, b = ${b}, c = ${c},  has a area = ${result}`);