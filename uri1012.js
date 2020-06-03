var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let linhaUm = lines.shift().split(' ');
let a = parseFloat(linhaUm[0]);
let b = parseFloat(linhaUm[1]);
let c = parseFloat(linhaUm[2]);

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * Math.pow(c, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(Math.pow(b, 2).toFixed(3))}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);