/* stdin
    6.0 4.0 2.0
    -----------
    6.0 4.0 2.1
*/

var input = require('fs').readFileSync('stdin', 'utf8');

var [a, b, c] = input.split(' ').map(item => parseFloat(item));

if (a + b > c && a + c > b && b + c > a){
    var p = a + b + c;
    console.log(`Perimetro = ${p.toFixed(1)}`);
}
else {
    var area = (a + b) * c / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}
