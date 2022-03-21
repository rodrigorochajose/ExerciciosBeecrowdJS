var input = require('fs').readFileSync('stdin', 'utf8');
var [cod, qnt] = input.split(' ');
var total = 0;

if (cod == 1){
    total = (qnt * 4.00);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}
else if (cod == 2){
    total = (qnt * 4.50);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}
else if (cod == 3){
    total = (qnt * 5.00);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}
else if (cod == 4){
    total = (qnt * 2.00);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}
else if (cod == 5){
    total = (qnt * 1.50);
    console.log(`Total: R$ ${total.toFixed(2)}`);
}
else console.log('Cod inválido');