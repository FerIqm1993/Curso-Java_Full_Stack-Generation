/**
 * Valida que el nombre tenga al menos 3 caracteres y solo contenga letras.
 * @param {string} nombre
 * @returns {object} { isValid: boolean, message: string }
 */
export function validateNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombre) {
        return { isValid: false, message: "El nombre es requerido." };
    }
    if (nombre.length < 3) {
        return { isValid: false, message: "El nombre debe tener al menos 3 caracteres." };
    }
    if (!regex.test(nombre)) {
        return { isValid: false, message: "El nombre solo puede contener letras y espacios." };
    }
    return { isValid: true, message: "" };
}

/**
 * Valida que el email tenga un formato estándar.
 * @param {string} email
 * @returns {object} { isValid: boolean, message: string }
 */
export function validateEmail(email) {
    // Expresión regular estándar para email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return { isValid: false, message: "El email es requerido." };
    }
    if (!regex.test(email)) {
        return { isValid: false, message: "El formato del email no es válido." };
    }
    return { isValid: true, message: "" };
}

/**
 * Valida que la edad sea un número positivo numérico.
 * @param {string|number} edad
 * @returns {object} { isValid: boolean, message: string }
 */
export function validateEdad(edad) {
    if (!edad) {
        return { isValid: false, message: "La edad es requerida." };
    }
    const edadNum = Number(edad);
    if (isNaN(edadNum)) {
        return { isValid: false, message: "La edad debe ser un valor numérico." };
    }
    if (edadNum <= 0) {
        return { isValid: false, message: "La edad debe ser un número positivo mayor a cero." };
    }
    if (!Number.isInteger(edadNum)) {
        return { isValid: false, message: "La edad debe ser un número entero." };
    }
    return { isValid: true, message: "" };
}
