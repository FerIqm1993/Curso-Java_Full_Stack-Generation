// Calcular la velocidad de un objeto dadas la distancia y el tiempo.

// Función común
function calcularVelocidad(distancia, tiempo) {
    const velocidad = distancia / tiempo;
    console.log(`Calcular la velocidad con una distancia de <${distancia}> y un tiempo de <${tiempo}> da como resultado <${velocidad}>`);
    return velocidad;
}

// Función flecha
const calcularVelocidadFlecha = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log(`Calcular la velocidad (flecha) con una distancia de <${distancia}> y un tiempo de <${tiempo}> da como resultado <${velocidad}>`);
    return velocidad;
}

// Calcular el volumen de una esfera.

// Función común
function calcularVolumenEsfera(radio) {
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    console.log(`Calcular el volumen de una esfera con radio <${radio}> da como resultado <${volumen}>`);
    return volumen;
}

// Función flecha
const calcularVolumenEsferaFlecha = (radio) => {
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    console.log(`Calcular el volumen de una esfera (flecha) con radio <${radio}> da como resultado <${volumen}>`);
    return volumen;
}

// --- Funciones para conectar con el HTML ---

function manejarVelocidad() {
    // Obtener los valores de los inputs de HTML por su id
    const distancia = parseFloat(document.getElementById("distancia").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);

    // Llamar a la función para que realice el cálculo
    const resultado = calcularVelocidad(distancia, tiempo);

    // Mostrar resultado en HTML
    document.getElementById("resultadoVelocidad").innerText = `El resultado es: ${resultado}`;
}

function manejarVolumen() {
    const radio = parseFloat(document.getElementById("radio").value);

    const resultado = calcularVolumenEsfera(radio);

    document.getElementById("resultadoVolumen").innerText = `El resultado es: ${resultado}`;
}
