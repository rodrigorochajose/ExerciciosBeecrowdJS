var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/*
var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');
var x1 = p1.shift();
var x2 = p2.shift();
var y1 = p1.shift();
var y2 = p2.shift();
*/

const [x1, y1] = lines[0].split(' ');
const [x2, y2] = lines[1].split(' ');

var distancia = (Math.sqrt(Math.pow((x2 - x1), 2) + (Math.pow((y2 - y1), 2))));

console.log(`${distancia.toFixed(4)}`);