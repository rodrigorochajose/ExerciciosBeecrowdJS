var input = require('fs').readFileSync('stdin', 'utf8');
var ano = 0;
var mes = 0;

if (input > 364){
    ano = parseInt(input / 365);
    input %= (ano * 365);
}
if (input > 29){
    mes = parseInt(input / 30);
    input %= (mes * 30);
}

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${input} dia(s)`);