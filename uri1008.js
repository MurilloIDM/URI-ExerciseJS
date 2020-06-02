var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHora = parseFloat(lines.shift());

let salario = horasTrabalhadas * valorPorHora;
console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
