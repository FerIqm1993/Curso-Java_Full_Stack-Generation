// 1. Programa para contar vocales en una palabra
function contarVocales(palabra) {
    if (typeof palabra !== 'string') return 0;
    
    const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contador = 0;
    
    for (let char of palabra) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    
    return contador;
}

// 2. Programa para determinar si una palabra es un palíndromo
function esPalindromo(palabra) {
    if (typeof palabra !== 'string') return false;
    
    // Convertir a minúsculas y quitar espacios para una mejor comparación
    const palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
    const palabraReversa = palabraLimpia.split('').reverse().join('');
    
    return palabraLimpia === palabraReversa;
}

// Función para interactuar con el HTML
function evaluarPalabra() {
    const inputElement = document.getElementById('inputPalabra');
    const resultadoVocales = document.getElementById('resultadoVocales');
    const resultadoPalindromo = document.getElementById('resultadoPalindromo');
    
    const palabra = inputElement.value.trim();
    
    if (palabra === '') {
        resultadoVocales.textContent = 'Por favor, ingresa una palabra.';
        resultadoPalindromo.textContent = '';
        return;
    }
    
    const numVocales = contarVocales(palabra);
    const palindromoStatus = esPalindromo(palabra) ? 'Palíndromo' : 'No palíndromo';
    
    resultadoVocales.innerHTML = `<strong>${palabra}</strong>: ${numVocales} vocales`;
    resultadoPalindromo.innerHTML = `<strong>${palabra}</strong>: ${palindromoStatus}`;
}

// Para consola / pruebas de los ejemplos
console.log("--- Prueba Contar Vocales ---");
console.log(`Ana: ${contarVocales('Ana')} vocales`);
console.log(`Computadora: ${contarVocales('Computadora')} vocales`);
console.log(`Elo: ${contarVocales('Elo')} vocales`);

console.log("\n--- Prueba Palíndromos ---");
console.log(`Ana -> ${esPalindromo('Ana') ? 'Palíndromo' : 'No palíndromo'}`);
console.log(`Oso -> ${esPalindromo('Oso') ? 'Palíndromo' : 'No palíndromo'}`);
console.log(`Gerardo -> ${esPalindromo('Gerardo') ? 'Palíndromo' : 'No palíndromo'}`);
console.log(`Torre -> ${esPalindromo('Torre') ? 'Palíndromo' : 'No palíndromo'}`);