// Cajero automático

/* 
Construir un programa que simule un cajero automático. 
El usuario tendrá un saldo inicial y podrá consultar su saldo, 
depositar dinero, retirar dinero o salir.
*/

// ################## Sección de Módulos ##################
const prompt = require("prompt-sync")();
// ################## Sección Principal ##################

function iniciarCajero() {
    // Definir variables iniciales del usuario 
    let saldo = 1000000;
    let conteoRetiro = 0;

    // Constantes
    const pinCorrecto = 1234; // PIN del cajero por defecto
    const limiteCantidadRetiro = 5000;
    const limiteRetiro = 1;

    // ################## Funciones  ##################

    function validarPin(pinIngresado) {
        return pinIngresado === pinCorrecto;
    }

    function depositarDinero(cantidadDepositar) {
        if (cantidadDepositar > 0) {
            saldo = saldo + cantidadDepositar;
            console.log(`Se ha depositado $${cantidadDepositar}\n`);
        } else {
            console.log("Cantidad inválida\n");
        }
    }

    function retirarDinero(cantidadRetirar) {
        if (conteoRetiro >= limiteRetiro) {
            console.log("Límite de retiros excedido\n");
        } else if (cantidadRetirar > saldo) {
            console.log("Saldo insuficiente\n");
        } else if (cantidadRetirar >= limiteCantidadRetiro) {
            console.log("Límite de cantidad de retiro excedido\n");
        } else if (cantidadRetirar <= 0) {
            console.log("Cantidad a retirar inválida\n");
        } else {
            saldo = saldo - cantidadRetirar;
            conteoRetiro = conteoRetiro + 1;
            console.log(`Se ha retirado $${cantidadRetirar}\n`);
        }
    }

    // ################## Menú ##################

    const menu = `\n========================
      CAJERO ATM
========================

1. Consultar saldo
2. Depositar
3. Retirar
4. Salir
\n`;

    // Ciclo para confirmar el PIN
    let comprobacionPin = false;
    do {
        let pinIngresado = parseInt(prompt("Ingrese su PIN de 4 dígitos:"));
        comprobacionPin = validarPin(pinIngresado);
        if (comprobacionPin) {
            console.log("PIN correcto\n");
        } else {
            console.log("PIN incorrecto\n");
        }
    } while (!comprobacionPin);

    // Ciclo para mostrar el menú
    let opcion = null;
    do {
        opcion = parseInt(prompt(`Selecciona una opción:\n${menu}`));

        if (opcion === 1) {
            console.log(`Su saldo actual es: $${saldo}\n`);

        } else if (opcion === 2) {
            console.log(`Su saldo anterior es: $${saldo}\n`);
            let cantidadDepositar = parseFloat(prompt("Ingrese la cantidad a depositar:"));

            depositarDinero(cantidadDepositar);
            console.log(`Su saldo actual es: $${saldo}\n`);

        } else if (opcion === 3) {
            console.log(`Su saldo anterior es: $${saldo}\n`);
            let cantidadRetirar = parseFloat(prompt("Ingrese la cantidad a retirar:"));

            retirarDinero(cantidadRetirar);
            console.log(`Su saldo actual es: $${saldo}\n`);

        } else if (opcion === 4) {
            console.log("Hasta luego\n");

        } else {
            console.log("Opción no válida\n");
        }
    } while (opcion !== 4);
}

// Iniciar el programa
iniciarCajero();
