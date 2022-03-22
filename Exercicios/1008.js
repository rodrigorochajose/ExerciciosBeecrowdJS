/* stdin
    25
    100
    5.50
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idfunc = lines.shift();
var qtdHrsTrabalhadas = lines.shift();
var valorHr = lines.shift();

console.log(`NUMBER = ${idfunc}`);
console.log(`SALARY = U$ ${(qtdHrsTrabalhadas * valorHr).toFixed(2)}`);