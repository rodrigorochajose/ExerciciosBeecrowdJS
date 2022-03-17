var input = require('fs').readFileSync('stdin', 'utf8');

// var min = (60 * input) / 30;
var min = input * 2;

console.log(`${min} minutos`);