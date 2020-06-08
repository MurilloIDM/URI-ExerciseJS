var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf-8');
var lines = input.split('\n');

let valorIntervalo = parseFloat(lines.shift());

if (valorIntervalo >= 0.0 && valorIntervalo <= 25.0) {
    console.log('Intervalo [0,25]');
} else if (valorIntervalo > 25.0 && valorIntervalo <= 50) {
    console.log('Intervalo (25,50]');
} else if (valorIntervalo > 50.0 && valorIntervalo <= 75.0) {
    console.log('Intervalo (50,75]');
} else if (valorIntervalo > 75.0 && valorIntervalo <= 100) {
    console.log('Intervalo (75,100]');
} else {
    console.log('Fora de intervalo');
}