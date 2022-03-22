/* stdin
    2.0 4.0 7.5 8.0
    6.4 
*/

var input = require('fs').readFileSync('stdin', 'utf8');

var val1 = input.split('\n');
var val2 = val1.shift();
var valf = val2.split(' ');

var n1 = parseFloat(valf.shift());
var n2 = parseFloat(valf.shift());
var n3 = parseFloat(valf.shift());
var n4 = parseFloat(valf.shift());

var med = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
console.log(`Media: ${med.toFixed(1)}`);

if (med >= 7.0){
    console.log('Aluno aprovado.');
}
else if (med < 5.0){
    console.log('Aluno reprovado.');
}
else if (med >= 5.0 && med <= 6.9){
    console.log('Aluno em exame.');
    var n5 = parseFloat(val1.shift());
    console.log(`Nota do exame: ${n5.toFixed(1)}`);
    var med = (med + n5) / 2;
    if (med >= 5.0){
        console.log('Aluno aprovado.');
    }
    else {
        console.log('Aluno reprovado');
    }
    console.log(`Media final: ${med.toFixed(1)}`);
}