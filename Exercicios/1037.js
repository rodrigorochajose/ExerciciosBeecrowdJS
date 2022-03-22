/* stdin
    25.01
    -----
    100.00
    ------
    -25.02
*/

var input = require('fs').readFileSync('stdin', 'utf8');

if (input >= 0 && input <= 25.0000)
    console.log('Intervalo [0,25]');
else if (input > 25 && input <= 50.0000000)
    console.log('Intervalo (25,50]');
else if (input > 50 && input <= 75.0000000)
    console.log('Intervalo (50,75]');
else if (input > 75 && input <= 100.0000000)
    console.log('Intervalo (75,100]');
else console.log('Fora de intervalo');
