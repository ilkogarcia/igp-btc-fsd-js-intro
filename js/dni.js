/* 
Vamos a crear una función que valide que un número de DNI y una letra son compatibles, para
ello necesitamos el siguiente algoritmo.
1. Realizar el módulo del número del DNI entre 23.
2. El resultado de ese módulo es la posición del siguiente array. TRWAGMYFPDXBNJZSQVHLCKET
*/

const validaDNI = (numero, letra) => {
    let dni = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    return (letra == dni[numero%23]) ? true : false;
} 

// Pedimos los datos al usuario
let numeroDNI = parseInt(prompt("Introduce el número del DNI (solo números):"));
let letraDNI = prompt("Introduce la letra del DNI (solo la letra):");

// Mostramos el resultado en una única linea
console.log(`El DNI con número ${numeroDNI} y la letra ${letraDNI.toUpperCase()}, ${validaDNI(numeroDNI, letraDNI.toUpperCase()) ? "si" : "no"} son compatibles`);