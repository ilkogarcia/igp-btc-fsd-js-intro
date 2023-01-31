// Kata: Calc

let varNum1 = parseInt(prompt('Introduce el valor 1: '));
let varNum2 = parseInt(prompt('Introduce el valor 2: '));
let operacion = prompt('¿Qué operación quiere realizar?:', '+ - * /')

if (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/") {
    alert('El operador no es correcto'); 
} else if (operacion == "+") {
    let resultado = varNum1 + varNum2;
    console.log('El resultado de la suma es:' +  resultado); 
} else if (operacion == "-") {
    let resultado = varNum1 - varNum2;
    console.log('El resultado de la resta es:' +  resultado); 
} else if (operacion == "*") {
    let resultado = varNum1 * varNum2;
    console.log('El resultado de la multiplicación es:' +  resultado); 
} else if (operacion == "/") {
    let resultado = varNum1 / varNum2;
    console.log('El resultado de la división es:' +  resultado); 
}
