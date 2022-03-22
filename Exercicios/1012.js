/* stdin
    3.0 4.0 5.2
    -----------
    12.7 10.4 15.2
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ').map(item => parseFloat(item));

const pi = 3.14159;


var TRIANGULO = a * c / 2;
var CIRCULO = pi * Math.pow(c, 2);
var TRAPEZIO = ((a + b) / 2) * c;
var QUADRADO = b**2;
var RETANGULO = a * b;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);
