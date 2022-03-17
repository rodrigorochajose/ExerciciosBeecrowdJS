var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var cp1 = p1.shift();
var np1 = p1.shift();
var vp1 = p1.shift();
var tp1 = np1 * vp1;

var cp2 = p2.shift();
var np2 = p2.shift();
var vp2 = p2.shift();
var tp2 = np2 * vp2;

console.log(`VALOR A PAGAR: R$ ${(tp1 + tp2).toFixed(2)}`)
