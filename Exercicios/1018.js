/*
//  PRIMEIRA VERSÃO FEITA POR MIM
var input = require('fs').readFileSync('stdin', 'utf8');

valor = {
    cem : 0,
    cinquenta : 0,
    vinte : 0,
    dez : 0,
    cinco : 0,
    dois : 0,
    um : 0,
}

while(input != 0){
    if (input >= 100){
        valor.cem = parseInt(input / 100);
        input -= (valor.cem * 100);
        }
    if (input >= 50 && input < 100){
        valor.cinquenta = parseInt(input / 50);
        input -= (valor.cinquenta * 50);
        }
    if (input >= 20 && input < 50){
        valor.vinte = parseInt(input / 20);
        input -= (valor.vinte * 20);
    }
    if (input >= 10 && input < 20){
        valor.dez = parseInt(input / 10);
        input -= (valor.dez * 10);
    }
    if (input >= 5 && input < 10){
        valor.cinco = parseInt(input / 5);
        input -= (valor.cinco * 5);
    }
    if (input >= 2 && input < 5){
        valor.dois = parseInt(input / 2);
        input -= (valor.dois * 2);
    }
    if (input == 1){
        valor.um = parseInt(input / 1);
        input -= (valor.um * 1);
    }
}
console.log(`${valor.cem} notas de R$ 100,00`);
console.log(`${valor.cinquenta} notas de R$ 50,00`);
console.log(`${valor.vinte} notas de R$ 20,00`);
console.log(`${valor.dez} notas de R$ 10,00`);
console.log(`${valor.cinco} notas de R$ 5,00`);
console.log(`${valor.dois} notas de R$ 2,00`);
console.log(`${valor.um} notas de R$ 1,00`);
*/

//      VERSÃO NÃO ACEITA PELO BEECROWD
var input = require('fs').readFileSync('stdin', 'utf8');

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

for (let nota of notas){
    let qtdNotas = parseInt(valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor %= nota;
}
