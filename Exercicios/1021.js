var input = require('fs').readFileSync('stdin', 'utf8');

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
for (let nota of notas){
    let qntNotas = parseInt(input / nota);
    console.log(`${qntNotas} nota(s) de R$ ${nota.toFixed(2)}`);
    input %= nota;
}
console.log('MOEDAS:');
for (let moeda of moedas){
    let qntMoedas = parseInt(input / moeda);
    console.log(`${qntMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    input %= moeda + 0.00001;
}
