var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let linhaUm = lines.shift().split(' ');
let a = parseInt(linhaUm[0]);
let b = parseInt(linhaUm[1]);
let c = parseInt(linhaUm[2]);

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorFinal = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maiorFinal} eh o maior`);