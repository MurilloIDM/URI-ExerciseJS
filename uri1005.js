var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let media = (a * 3.5 + b * 7.5) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);