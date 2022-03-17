/*
        NÃO ACEITO PELO SITE MAS MESMA FUNCIONALIDADE

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Informe A ', (a)=>{
    r1.question('Informe B ', (b)=>{
        let x = parseInt(a) + parseFloat(b);
        console.log(`X = ${x}`);
    })
})

r1.on('close',()=>{
    console.log('adeus');
    process.exit(0);
})
*/

//  ACEITO PELO SITE

var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());

var X = A + B;

console.log(`X = ${X}`);
