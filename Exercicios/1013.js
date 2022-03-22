/* stdin
    7 14 106
    --------
    217 14 6
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var [a, b, c] = input.split(' ').map(item => parseInt(item));


var maiorab = (a + b + Math.abs(a - b)) / 2;
var maiorx = (c + maiorab + Math.abs(c - maiorab)) /2 ;

console.log(`${maiorx} eh o maior`);