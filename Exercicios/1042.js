/* stdin
    7 21 -14
    ---------
    -14 21 7
*/

var input = require('fs').readFileSync('stdin', 'utf8');
/*
var [a, b, c] = input.split(' ').map(item => parseInt(item));
*/
var lines = input.split(' ');
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

if (a < b && a < c){
    var menor = a;
    if (b < c){
        var meio = c;
        var maior = b;
    }
    else {
        meio = b;
        maior = c;
    }
}
else if (b < a && b < c){
    menor = b;
    if (a < c){
        meio = a;
        maior = c;
    }
    else {
        meio = c;
        maior = a;
    }
}
else {
    menor = c;
    if (b < a){
        meio = a;
        maior = b;
    }
    else {
        meio = b;
        maior = a;
    }
}

console.log(`${menor}\n${meio}\n${maior}\n`);
console.log(`${a}\n${b}\n${c}\n`);