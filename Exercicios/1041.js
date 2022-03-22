/* stdin
    4.5 -2.2
    --------
    0.0 0.0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var [x, y] = input.split(' ').map(item => parseFloat(item));

if (x == 0.0 && y == 0.0){
    console.log('Origem');
}
else if (x == 0.0 && y != 0.0){
    console.log('Eixo Y');
}
else if (y == 0.0 && x != 0.0){
    console.log('Eixo X');
}
else if (x > 0.0){
    if (y > 0.0)
        console.log('Q1');
    else console.log('Q4');
}
else if (y > 0.0){
    console.log('Q2');
}
else console.log('Q3');
