var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salFixo = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());

var comissao = totalVendas * 0.15;

console.log(`TOTAL = R$ ${(salFixo + comissao).toFixed(2)}`)