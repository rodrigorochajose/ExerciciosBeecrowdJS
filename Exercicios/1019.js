var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseInt(input);

const tempo = 60;
var hora = 0;
var min = 0;
var seg = 0;

if (valor > 3599){
    hora = parseInt(valor / 3600);
    valor %= 3600;
}
if (valor > 59){
    min = parseInt(valor / tempo);
    valor %= 60;
}
if (valor < 60){
    seg = valor;
}

console.log(`${hora}:${min}:${seg}`);