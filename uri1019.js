var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split();

let tempoTotal = parseInt(lines.shift());

let horas = parseInt(tempoTotal / 3600);
let minutos = parseInt(tempoTotal % 3600 / 60);
let segundos = parseInt(tempoTotal % 3600 % 60);

console.log(`${horas}:${minutos}:${segundos}`);