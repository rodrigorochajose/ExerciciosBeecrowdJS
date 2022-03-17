/*
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var horasGastas = lines.shift();
var velMedia = lines.shift();

var litrosNecessarios = (horasGastas * velMedia) / 12;

console.log(`${litrosNecessarios.toFixed(3)}`);

*/

var input = require('fs').readFileSync('stdin', 'utf8');
var [horasGastas, velMedia] = input.split('\n');

var litrosNecessarios = (horasGastas * velMedia) / 12;

console.log(`${litrosNecessarios.toFixed(3)}`);