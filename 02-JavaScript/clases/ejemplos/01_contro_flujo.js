// Configuración para prompt
const prompt = require("prompt-sync")();

// Solicitar número para clasificarlo
let numero = Number(prompt("Escriba su número a clasificar: "));

// Clasificar si es mayor, menor o igual a cero
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

// Clasificar si es par o impar
if (numero % 2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}