var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split();

let valor = parseFloat(lines.shift());

let cedCem = parseInt(valor / 100);
let cedCinquenta = parseInt((valor - (cedCem * 100)) / 50);
let cedVinte = parseInt((valor - (cedCem * 100 + cedCinquenta * 50)) / 20);
let cedDez = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20)) / 10);
let cedCinco = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20 + cedDez * 10)) / 5);
let cedDois = parseInt((valor - (cedCem * 100 + cedCinquenta * 50 + cedVinte * 20 + cedDez * 10 + cedCinco * 5)) / 2);

let moedas = parseFloat((valor - (cedCem * 100.00 + cedCinquenta * 50.00 + cedVinte * 20.00 + cedDez * 10.00 + cedCinco * 5.00 + cedDois * 2.00)));

let moUm = parseInt(moedas / 1);
let moCinquenta = parseInt((moedas - moUm * 1.0) / 0.50);
let moVinteCinco = parseInt((moedas - (moUm * 1.0 + moCinquenta * 0.50)) / 0.25);
let moDez = parseInt((moedas - (moUm * 1 + moCinquenta * 0.50 + moVinteCinco * 0.25)) / 0.10);
let moCinco = parseInt((moedas - (moUm * 1 + moCinquenta * 0.50 + moVinteCinco * 0.25 + moDez * 0.10)) / 0.05);
let moUmCent = parseInt((moedas - (moUm * 1 + moCinquenta * 0.50 + moVinteCinco * 0.25 + moDez * 0.10 + moCinco * 0.05)) / 0.01);

console.log('NOTAS:');
console.log(`${cedCem} nota(s) de R$ 100.00`);
console.log(`${cedCinquenta} nota(s) de R$ 50.00`);
console.log(`${cedVinte} nota(s) de R$ 20.00`);
console.log(`${cedDez} nota(s) de R$ 10.00`);
console.log(`${cedCinco} nota(s) de R$ 5.00`);  
console.log(`${cedDois} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${moUm} moeda(s) de R$ 1.00`);
console.log(`${moCinquenta} moeda(s) de R$ 0.50`);
console.log(`${moVinteCinco} moeda(s) de R$ 0.25`);
console.log(`${moDez} moeda(s) de R$ 0.10`);
console.log(`${moCinco} moeda(s) de R$ 0.05`);
console.log(`${moUmCent} moeda(s) de R$ 0.01`);
