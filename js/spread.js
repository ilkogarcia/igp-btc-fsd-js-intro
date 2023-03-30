// SPREAD
// Nos permite distribuir los elementos entre los argumentos de una función.

// const DescribePersona = (nombre, edad, ciudad, hobby) => {
//     console.log(nombre);
//     console.log(edad);
//     console.log(ciudad);
//     console.log(hobby);
// }

// let persona = ["David","36", "Valencia" ,"Padel"]

// Sin SPREAD
// DescribePersona(persona[0], persona[1], persona[2], persona[3]);

// Con SPREAD
// DescribePersona(...persona);


// REST
/* Rest nos agrupa en un array todos los argumentos que reciba en una función */

// const SaludaAlumno = (...argumentos) => {
//     argumentos.map(e => console.table(e));
// }

// const personas = [
//     ["Felipe", 35, "Valencia", "Cine", "Lectura"],
//     ["Zuzana", 30, "Murcia", "Comer", "Viajar", "Deporte"],
//     ["Maria", 15, "Alicante", "Esquiar", "Patinar"],
//     ["Ramón", 10, "Madrid", "Leer"]
// ];

// for (let i = 0; i < personas; i++) {
//     SaludaAlumno(personas[i]);
// }

// EXTENSIONES
// const Pokemon = (nombre, tipo, ataque) => {
//     return ({nombre, tipo, ataque});
// }

// Pokemon("Pikachu", "Electrico", "Rayo");

// DESESTRUCTURACION
// Desestructuramos de un array

// let series = ["One Pice", "Juego de Tronos", "Salvados por la campana", "Los 100", "Paquita"]
// let [eterna, aburrida, clasica, pesada] = series;

// console.log(eterna)
// console.log(aburrida)
// console.log(clasica)
// console.log(pesada)


// Desestructuramos un objeto

// let juegos = {
//     x: "Monopoly",
//     y: "Catan",
//     z: "GloomHeaven"
// }

// let { ricos:x, batallas:y, asesinos:z};
// console.log


// const SumaNumeros = (...numeros) => {
//     let r = 0;
//     for (let num of numeros) {
//         r += num;
//     }
//     return r;
// }

// // let listNum = [91, 90, 70, 50, 10, 89, 12, 24];
// console.log(SumaNumeros(91, 90, 70, 50, 10, 89, 12, 24));


