var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let linhaUm = lines.shift().split(' ');
let codigoPecaUm = parseInt(linhaUm[0]);
let quantidadePecaUm = parseInt(linhaUm[1]);
let valorPecaUm = parseFloat(linhaUm[2]);

let linhaDois = lines.shift().split(' ');
let codigoPecaDois = parseInt(linhaDois[0]);
let quantidadePecaDois = parseInt(linhaDois[1]);
let valorPecaDois = parseFloat(linhaDois[2]);

let valorTotal = (quantidadePecaUm * valorPecaUm) + (quantidadePecaDois * valorPecaDois);
console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);