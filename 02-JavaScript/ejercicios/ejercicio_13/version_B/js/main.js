// Seleccionamos el botón por su ID y lo guardamos en una variable
const botonTema = document.getElementById("btnTema");

// Seleccionamos el <body> entero de la página
const cuerpoPagina = document.body;

// Al cargar la página, verificamos si hay un tema guardado en localStorage
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado === "dark") {
    // Si estaba oscuro, aplicamos el tema
    cuerpoPagina.setAttribute("data-bs-theme", "dark");
    botonTema.textContent = "Cambiar a Modo Claro";
    botonTema.classList.replace("btn-dark", "btn-light");
}

// Le decimos al botón que "escuche" (escuche el evento de 'click')
botonTema.addEventListener("click", () => {

    // Preguntamos: ¿El cuerpo de la página ya tiene el tema oscuro?
    // Bootstrap 5 usa un atributo llamado 'data-bs-theme' para esto.
    if (cuerpoPagina.getAttribute("data-bs-theme") === "dark") {

        // Si YA está oscuro, lo quitamos (lo pasamos a modo claro)
        cuerpoPagina.removeAttribute("data-bs-theme");

        // Lo guardamos en localStorage como modo claro
        localStorage.setItem("tema", "light");

        // También cambiamos el texto y color del botón para que tenga sentido
        botonTema.textContent = "Cambiar a Modo Oscuro";
        botonTema.classList.replace("btn-light", "btn-dark");

    } else {

        // Si NO está oscuro, se lo agregamos
        cuerpoPagina.setAttribute("data-bs-theme", "dark");

        // Lo guardamos en localStorage como modo oscuro
        localStorage.setItem("tema", "dark");

        // Cambiamos el texto y color del botón
        botonTema.textContent = "Cambiar a Modo Claro";
        botonTema.classList.replace("btn-dark", "btn-light");
    }

});
