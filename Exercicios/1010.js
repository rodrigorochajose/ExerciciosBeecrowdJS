var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines.shift().split(' ');
var p2 = lines.shift().split(' ');

var idPeca1 = p1.shift();
var qtdPeca1 = p1.shift();
var valorUniPeca1 = p1.shift();
var valorTotalPeca1 = np1 * vp1;

var idPeca2 = p2.shift();
var qtdPeca2 = p2.shift();
var valorUniPeca2 = p2.shift();
var valorTotalPeca2 = np2 * vp2;

console.log(`VALOR A PAGAR: R$ ${(valorTotalPeca1 + valorTotalPeca2).toFixed(2)}`)
