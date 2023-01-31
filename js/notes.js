// JKata ¿Estoy Aprobado?
var nota = parseInt(prompt("¿Cuál ha sido tu nota?: (0-10) "));

if (nota >= 0 && nota <= 4) {
    console.log('Tu calificación es Insuficiente'); 
} else if (nota === 5 || nota === 6) {
    console.log('Tu calificación es Suficiente');
} else if (nota === 7 || nota === 8) {
    console.log('Tu calificación es Notable');
} else if (nota === 9 || nota === 10) {
    console.log('Tu calificación es Sobresaliente');
} else {
    alert('La nota introducida no es correcta.')
}
