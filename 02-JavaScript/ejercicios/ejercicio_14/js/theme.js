// ==========================================
// MÓDULO: MANEJO DEL TEMA (WebStorage)
// ==========================================

export function cambiarTema() {
    const temaBtn = document.getElementById("temaBtn");
    const html = document.querySelector("html");
    let temaActual;
    // let tema = html.getAttribute("data-bs-theme");

    if( localStorage.getItem("tema") != null ){ // Revisar si el elemento "tema" ya existe dentro de localStorage
        temaActual = localStorage.getItem("tema"); // Devuelve light/dark
        html.setAttribute("data-bs-theme", temaActual); // Se renderiza el color según localStorage
    } else { // Si NO EXISTE
        localStorage.setItem("tema", "light"); // Lo crea, valor inicial "light"
        temaActual = localStorage.getItem("tema"); // Actualiza temaActual con localStorage
        html.setAttribute("data-bs-theme", temaActual); // Renderiza en html según el temaActual
    }// else

    temaBtn.addEventListener("click", () => {
        if (temaActual === "light") { // Lee el valor de data-bs-theme en HTML
            html.setAttribute("data-bs-theme", "dark"); // Si es light, lo cambia a dark
            temaActual = html.getAttribute("data-bs-theme"); // Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        } else {
            html.setAttribute("data-bs-theme", "light"); // Si NO es light, lo define asi
            temaActual = html.getAttribute("data-bs-theme"); // Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        }
    });

}// cambiarTema
