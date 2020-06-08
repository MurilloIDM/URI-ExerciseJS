var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let valores = lines.shift().split(' ');
let a = parseFloat(valores[0]);
let b = parseFloat(valores[1]);
let c = parseFloat(valores[2]);

let delta = Math.pow(b, 2) - (4 * a * c);

if (a == 0 || delta < 0) {
    console.log('Impossivel calcular');
} else {
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}