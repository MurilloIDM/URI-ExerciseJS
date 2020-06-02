var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let raio = parseInt(lines.shift());

let volume = (4/3) * 3.14159 * Math.pow(raio, 3);
console.log(`VOLUME = ${volume.toFixed(3)}`);