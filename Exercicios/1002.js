/* stdin
    2.00
    -----
    100.64
*/

var input = require('fs').readFileSync('stdin1002', 'utf8');

const n = 3.14159;

let raio = parseFloat(input);

let area = n * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);
