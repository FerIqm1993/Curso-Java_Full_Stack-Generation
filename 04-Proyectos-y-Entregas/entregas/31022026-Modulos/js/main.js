import { suma, resta, multiplicacion, cociente, residuo } from "./operaciones.js";

// Obtenemos las referencias a los elementos del HTML
const inputN1 = document.getElementById("input-n1");
const inputN2 = document.getElementById("input-n2");
const resultDisplay = document.getElementById("result-display");
const buttons = document.querySelectorAll(".op-btn");

// Nuestro diccionario de operaciones como lo habíamos visto
const operaciones = {
    1: suma,
    2: resta,
    3: multiplicacion,
    4: cociente,
    5: residuo
};

// Le agregamos un evento "click" a cada botón
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Obtenemos los valores actuales de los inputs y los convertimos a números (float)
        const n1 = parseFloat(inputN1.value);
        const n2 = parseFloat(inputN2.value);

        // Validamos que el usuario haya escrito números válidos
        if (isNaN(n1) || isNaN(n2)) {
            resultDisplay.textContent = "Error";
            return;
        }

        // Obtenemos qué operación se presionó usando el atributo data-op (1, 2, 3...)
        const op = parseInt(button.getAttribute("data-op"));

        // Verificamos si existe en nuestro objeto de operaciones y ejecutamos
        if (operaciones[op]) {
            const resultado = operaciones[op](n1, n2);
            resultDisplay.textContent = resultado;
        }
    });
});