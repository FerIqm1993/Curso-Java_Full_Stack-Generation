import { validateNombre, validateEmail, validateEdad } from './validations.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ejercicioForm');
    
    // Elementos del DOM
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const edadInput = document.getElementById('edad');
    
    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const edadError = document.getElementById('edadError');
    
    const successMessage = document.getElementById('successMessage');

    // Función auxiliar para mostrar/ocultar errores visualmente usando clases de Bootstrap
    const setError = (inputElement, errorElement, message) => {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
        errorElement.textContent = message;
    };

    const setValid = (inputElement, errorElement) => {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
        errorElement.textContent = '';
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el envío por defecto
        
        let isFormValid = true;

        // Validar Nombre
        const nombreVal = validateNombre(nombreInput.value.trim());
        if (!nombreVal.isValid) {
            setError(nombreInput, nombreError, nombreVal.message);
            isFormValid = false;
        } else {
            setValid(nombreInput, nombreError);
        }

        // Validar Email
        const emailVal = validateEmail(emailInput.value.trim());
        if (!emailVal.isValid) {
            setError(emailInput, emailError, emailVal.message);
            isFormValid = false;
        } else {
            setValid(emailInput, emailError);
        }

        // Validar Edad
        const edadVal = validateEdad(edadInput.value.trim());
        if (!edadVal.isValid) {
            setError(edadInput, edadError, edadVal.message);
            isFormValid = false;
        } else {
            setValid(edadInput, edadError);
        }

        // Si el formulario es válido
        if (isFormValid) {
            successMessage.classList.remove('d-none');
            // Opcional: resetear el formulario después de un tiempo
            setTimeout(() => {
                form.reset();
                nombreInput.classList.remove('is-valid');
                emailInput.classList.remove('is-valid');
                edadInput.classList.remove('is-valid');
                successMessage.classList.add('d-none');
            }, 3000);
        } else {
            successMessage.classList.add('d-none');
        }
    });
});
