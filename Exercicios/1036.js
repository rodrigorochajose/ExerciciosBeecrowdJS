var input = require('fs').readFileSync('stdin', 'utf8');

var [a, b, c] = input.split(' ');

var delta = (Math.pow(b, 2) - 4 * a * c);
if (delta > 0 && a != 0){
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
}
else console.log('Impossivel calcular');