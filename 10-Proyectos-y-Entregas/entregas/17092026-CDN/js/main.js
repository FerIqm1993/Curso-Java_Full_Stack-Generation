// Función sencilla para saludar en la consola cuando cargue la página
function saludarPersonaje(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido a la página de Kimetsu no Yaiba.`);
}

// Ejecutar la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    saludarPersonaje('Cazador de Demonios');

    // Evento de clic a las tarjetas para que saluden al hacerles clic
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const nombrePersonaje = tarjeta.querySelector('.card-title').innerText;
            alert(`¡Has seleccionado a ${nombrePersonaje}!`);
        });
    });
});
