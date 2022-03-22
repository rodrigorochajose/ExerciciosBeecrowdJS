/* stdin
    30
    10
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

console.log(`SOMA = ${A+B}`);