var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

var n1 = parseFloat(valores.shift());
var n2 = parseFloat(valores.shift());
var n3 = parseFloat(valores.shift());
var n4 = parseFloat(valores.shift());

// var [n1, n2, n3, n4, n5] = input.split(' ').map(item => parseFloat(item));

var med = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
console.log(`Media: ${med.toFixed(1)}`);

if (med >= 7.0){
    console.log('Aluno aprovado.');
}
else if (med < 5.0){
    console.log('Aluno reprovado.');
}
else if (med >= 5.0 && med <= 6.9){
    var n5 = parseFloat(valores.shift());
    console.log('Aluno em exame.');
    console.log(`Nota do exame: ${n5.toFixed(1)}`);
    var med = (med + n5) / 2;
    if (med >= 5.0){
        console.log('Aluno aprovado.');
    }
    else console.log('Aluno reprovado');
    console.log(`Media final: ${med.toFixed(1)}`);
}