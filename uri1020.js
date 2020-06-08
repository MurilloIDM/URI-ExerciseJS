var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let idadeDias = parseInt(lines.shift());

let anos = parseInt(idadeDias / 365);
let meses = parseInt((idadeDias - anos * 365) / 30);
let dias = parseInt((idadeDias - anos * 365) % 30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);