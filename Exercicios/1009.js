var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salf = parseFloat(lines.shift());
var ttv = parseFloat(lines.shift());

var c = ((ttv * 15) / 100);

console.log(`TOTAL = R$ ${(salf + c).toFixed(2)}`)