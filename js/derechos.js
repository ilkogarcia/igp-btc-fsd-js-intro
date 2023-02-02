/*
Genera una aplicación que te pida la edad y el pais donde vives, en base a eso te responderá si es legal por tu parte adquirir cerveza, además también te dirá si eres o no mayor de edad. Toma como referencias Estados Unidos (21) y Europa (18).
*/ 

// Declaramos como constantes as edades de mayoría de edad legal
const adultAge_USA = 21;
const adultAge_UE = 18;

// Pedimos los datos de edad y país al usuario
let userCountry = prompt("¿Cuál es tu país de residencia?: (USA, UE)");
let userAge = parseInt(prompt("¿Qué edad tienes actualmente?: "));

switch (userCountry) {
    case "USA":
        console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_USA) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
        break;
    case "UE":
        console.log (`Con tu edad de ${userAge} ${(userAge < adultAge_UE) ? "no es" : "es"} legal adquirir cerveza en ${userCountry}`);
        break;
    default:
        console.log("Introduce un país correcto.");
}

