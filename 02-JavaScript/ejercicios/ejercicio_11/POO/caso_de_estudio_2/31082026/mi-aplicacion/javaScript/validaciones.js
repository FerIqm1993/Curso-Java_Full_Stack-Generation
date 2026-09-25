/* Función de validación para atributos de usuarios */

const regExpCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const regExpNombre = /^[a-zA-Z]{3,}$/;

export function validarCorreo(correo) {
    return regExpCorreo.test(correo);
}

export function validarNombre(nombre) {
    return regExpNombre.test(nombre);
}