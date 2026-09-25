// Ciclo de 1 en 1 hasta el 10

for (numero = 10; numero >= 0; numero--) {

    console.log(numero)
}

for (let i = 1; i <= 20; i++) {
  // Verificamos si el residuo de la división entre 2 es 0 (es par)
  if (i % 2 === 0) {
    console.log(i + " - par");
  } else {
    console.log(i + " - impar");
  }
}


let numero = parseInt(prompt("Ingresa un número:"));

while (numero !== 0) {
  numero = parseInt(prompt("Ingresa un número:"));
}

console.log("Programa Terminado");

let opcion;

do {

  opcion = prompt(
    "1. Saludar\n" +
    "2. Mostrar mensaje\n" +
    "3. Salir\n\n" +
    "Selecciona una opción:"
  );

  if (opcion === "1") {
    alert("Hola!");
  } else if (opcion === "2") {
    alert("¡Estás aprendiendo JavaScript!");
  } else if (opcion === "3") {
    alert("Programa terminado");
  } else {
    alert("Opción no válida. Intenta de nuevo.");
  }

} while (opcion !== "3");