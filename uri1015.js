var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let linhaUm = lines.shift().split(' ');
let linhaDois = lines.shift().split(' ');

let x1 = parseFloat(linhaUm[0]);
let y1 = parseFloat(linhaUm[1]);
let x2 = parseFloat(linhaDois[0]);
let y2 = parseFloat(linhaDois[1]);

let distanciaDoisPontos = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));
console.log(`${distanciaDoisPontos.toFixed(4)}`);
