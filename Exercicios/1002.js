var input = require('fs').readFileSync('stdin1002', 'utf8');
var lines = input.split('\n');

const n = 3.14159;

let raio = parseFloat(input);

let area = n * (raio*raio);

console.log(`A=${area.toFixed(4)}`);
