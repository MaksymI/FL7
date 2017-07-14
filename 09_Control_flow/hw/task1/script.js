var sh = '#';
var sp = ' ';

sh = sh.charCodeAt()-sp.charCodeAt()+1;

while (sh--) {
    console.log(`${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}`);
    console.log(`${sp}${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}${sp}${String.fromCharCode(sp.charCodeAt()+3)}`);
}