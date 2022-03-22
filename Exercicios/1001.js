/* stdin
    10
    9
    ---
    -10
    4
*/

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var X = A + B;

console.log(`X = ${X}`);
