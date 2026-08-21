// Datos de ejemplo
let tieneInvitacion = true;
let esVip = false;
let estaEnListaNegra = false;

// Pedimos la edad al usuario
let edad = parseInt(prompt("Ingresa tu edad para validar el acceso:"));

// Condiciones
let cumpleEdad = edad >= 18;
let cumpleInvitacionOVip = tieneInvitacion || esVip;
let noEstaEnListaNegra = !estaEnListaNegra;

// Evaluamos
let resultado = cumpleEdad && cumpleInvitacionOVip && noEstaEnListaNegra;

// Resultado
if (resultado) {
    console.log("¡Bienvenido! Puedes entrar al evento VIP.");
} else {
    console.log("Lo siento, no puedes entrar al evento VIP.");
}