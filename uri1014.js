var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let distanciaPercorrida = parseInt(lines.shift());
let totalCombustivel = parseFloat(lines.shift());

console.log(`${(distanciaPercorrida / totalCombustivel).toFixed(3)} km/l`);