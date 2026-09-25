// Clase Estudiante (Programación Orientada a Objetos)
// Creamos una clase para instanciar objetos de tipo Estudiante con sus propiedades.
class Estudiante {
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Arreglo para almacenar a los estudiantes registrados
let estudiantes = [];

// Seleccionamos los elementos del DOM (Document Object Model) que vamos a utilizar
const form = document.getElementById('student-form');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const studentList = document.getElementById('student-list');

// Escuchamos el evento 'submit' del formulario
form.addEventListener('submit', function(evento) {
    // Evitamos el comportamiento por defecto del formulario (que es recargar la página)
    evento.preventDefault();

    // Obtenemos los valores de los inputs y eliminamos espacios en blanco al inicio y final
    const nombre = nombreInput.value.trim();
    const edadValor = edadInput.value.trim();

    // Validaciones
    // 1. Que ningún campo esté vacío
    if (nombre === '' || edadValor === '') {
        alert('Por favor, completa todos los campos.');
        return; // Detiene la ejecución si hay error
    }

    // 2. Que la edad sea numérica
    const edad = Number(edadValor);
    if (isNaN(edad) || edad <= 0) {
        alert('La edad debe ser un número válido y mayor a 0.');
        return;
    }

    // Generamos un ID único (usaremos la fecha actual en milisegundos)
    const id = Date.now();

    // Crear una nueva instancia de la clase Estudiante
    const nuevoEstudiante = new Estudiante(id, nombre, edad);

    // Guardarla dentro del arreglo usando el método push
    estudiantes.push(nuevoEstudiante);

    // Limpiamos los inputs del formulario para facilitar el siguiente registro
    form.reset();

    // Mostrar dinámicamente todos los estudiantes en pantalla
    mostrarEstudiantes();
});

// Función para renderizar los estudiantes en el DOM
function mostrarEstudiantes() {
    // Limpiamos el contenedor antes de renderizar para evitar duplicados
    studentList.innerHTML = '';

    // Iteramos sobre el arreglo de estudiantes con forEach
    estudiantes.forEach(function(estudiante) {
        // Creamos la estructura HTML para cada estudiante (una tarjeta de Bootstrap)
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm text-center';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title m-0';
        
        // Asignamos el texto con el formato esperado: "Nombre - Edad años"
        cardTitle.textContent = `${estudiante.nombre} - ${estudiante.edad} años`;

        // Construimos el árbol de elementos (DOM)
        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        col.appendChild(card);

        // Finalmente, agregamos la columna al contenedor principal en el HTML
        studentList.appendChild(col);
    });
}