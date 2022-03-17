var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nf = parseInt(lines.shift());
var nht = parseInt(lines.shift());
var vph = parseFloat(lines.shift());

console.log(`NUMBER = ${nf}`);
console.log(`SALARY = U$ ${(nht*vph).toFixed(2)}`);