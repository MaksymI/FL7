var sh = '#';
var sp = ' ';

var i = 1;
while (i < 9) {
    if (i % 2 === 0) {
        console.log(`${sp}${sh}${sp}${sh}${sp}${sh}${sp}${sh}`);
    } else {
        console.log(`${sh}${sp}${sh}${sp}${sh}${sp}${sh}`);
    }
    i++;
}