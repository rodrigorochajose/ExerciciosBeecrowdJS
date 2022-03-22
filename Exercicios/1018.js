/* stdin
    576
*/

var input = require('fs').readFileSync('stdin', 'utf8');

let valor = parseInt(input);
console.log(valor);

const notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor %= nota;
    console.log(valor)
}
