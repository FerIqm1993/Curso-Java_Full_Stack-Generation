const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function main() {
    // Definir la variable opción
    let opcion = null;

    // Crear ciclo para preguntar al usuario
    do {
        // Preguntar al usuario
        let respuesta = await rl.question(` 
        Selecciona una opción:
        1. Saludar
        2. Mostrar mensaje
        3. Salir
        `);

        opcion = parseInt(respuesta);

        if (opcion === 1) {
            console.log("Hola, cómo estás!");
        } else if (opcion === 2) {
            console.log("Estoy aprendiendo estructuras de control de flujo");
        } else if (opcion === 3) {
            // No hacer nada extra, el ciclo terminará
        } else {
            console.log("Escoja una opción válida");
        }

    } while (opcion !== 3); // Cambiado a !== 3 para que no sea un loop infinito

    console.log("Programa Terminado");
    rl.close();
}

main();