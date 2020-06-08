var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

let cedCem = parseInt(valor / 100);
let cedCinquenta = parseInt((valor - (cedCem * 100)) / 50);
let cedVinte = parseInt((valor - (cedCem * 100 + cedCinquenta * 50)) / 20);
let cedDez = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20)) / 10);
let cedCinco = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20 + cedDez * 10)) / 5);
let cedDois = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20 + cedDez * 10 + cedCinco * 5)) / 2);
let cedUm = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20 + cedDez * 10 + cedCinco * 5 + cedDois * 2)) / 1);

console.log(valor);
console.log(`${cedCem} nota(s) de R$ 100,00`);
console.log(`${cedCinquenta} nota(s) de R$ 50,00`);
console.log(`${cedVinte} nota(s) de R$ 20,00`);
console.log(`${cedDez} nota(s) de R$ 10,00`);
console.log(`${cedCinco} nota(s) de R$ 5,00`);
console.log(`${cedDois} nota(s) de R$ 2,00`);
console.log(`${cedUm} nota(s) de R$ 1,00`);