var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
var raio = parseFloat(lines.shift());

var vol = (4/3) * pi * (raio**3);

console.log(`VOLUME = ${vol.toFixed(2)}`);
