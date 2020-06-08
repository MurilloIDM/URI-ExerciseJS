var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let horasGastas = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

console.log(`${((horasGastas * velocidadeMedia) / 12.0).toFixed(3)}`);