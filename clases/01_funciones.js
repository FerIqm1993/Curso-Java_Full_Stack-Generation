/* Función para calcular el área de un rectangulo */

// Función para el cálculo del área
function calcularAreaRectangulo(base, altura) {
    const area = base * altura;
    return area;
}

// Definir variables de lados a usar
let ladoA = 5;
let ladoB = 10;

// Mostrar mensaje y función en consola
console.log(`El área de un rectángulo de base ${ladoA} unidades y altura ${ladoB} unidades es de ${calcularAreaRectangulo(ladoA, ladoB)} unidades cuadradas.`);

