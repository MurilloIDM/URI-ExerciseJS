var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

var distanciaPercorrida = parseInt(lines.shift());
console.log(`${distanciaPercorrida * 2} minutos`);