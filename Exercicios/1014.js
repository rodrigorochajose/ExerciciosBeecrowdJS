/* stdin
    500
    35.0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var totalDistancia = lines.shift();
var totalCombustivel = lines.shift();
var res = totalDistancia / totalCombustivel;

console.log(`${res.toFixed(3)} km/l`);