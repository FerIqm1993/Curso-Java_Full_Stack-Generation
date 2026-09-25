/*
1. Pedir número 1
2. Pedir número 2
3. Pedir operación
4. Según la operación:
      + → sumar
      - → restar
      * → multiplicar
      / → dividir
5. Mostrar resultado
*/

// --- Funciones para cada operación matemática ---
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
    return a / b;
}

// --- Datos introducidos ---
let numero1 = 10;
let numero2 = 56;
let operacion = '/'; // Puedes probar con '+', '-', '*', o '/'
let resultado;

// --- Según la operación, llamamos a la función correspondiente ---
if (operacion === '+') {
    resultado = sumar(numero1, numero2);
} else if (operacion === '-') {
    resultado = restar(numero1, numero2);
} else if (operacion === '*') {
    resultado = multiplicar(numero1, numero2);
} else if (operacion === '/') {
    resultado = dividir(numero1, numero2);
} else {
    resultado = 'Error: Operación no válida';
}

// --- Mostramos resultado ---
console.log("El primer número es: " + numero1);
console.log("El segundo número es: " + numero2);
console.log("La operación elegida es: " + operacion);
console.log("El resultado es: " + resultado);
