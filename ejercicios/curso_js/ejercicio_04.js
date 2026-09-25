// Definimos estado de licencia y mayoría de edad
let tieneLicencia = true;
let esMayorDeEdad = true;

// Comprobamos si puede manejar
if (tieneLicencia && esMayorDeEdad) {
    console.log("Puedes Manejar");
} else {
    console.log("No puedes Manejar");
}

// Definimos estado de día de circulación
let hoyNoCircula = false;
let exento = true;

// Comprobamos si puede circular
if (!hoyNoCircula || exento) {
    console.log("Puedes circular");
} else {
    console.log("No puedes circular");
}