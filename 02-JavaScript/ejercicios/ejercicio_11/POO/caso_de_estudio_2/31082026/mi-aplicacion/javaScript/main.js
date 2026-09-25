// Importaciones
import { Usuario } from "./usuario.js";
import { validarCorreo, validarNombre } from "./validaciones.js";

// Importacion para probar en node
import promptSync from "prompt-sync";
const prompt = promptSync();

// Arreglo para almacenar usuarios creados
const usuarios = [];


//-------------- Funciones principales --------------

// Función para crear usuarios
function crearUsuarios() {
    let nombre = prompt("Escriba el nombre de usuario: ");
    let correo = prompt("Escriba el correo de usuario: ");

    // Validaciones nombre y usuario
    if (validarNombre(nombre) && validarCorreo(correo)) {
        console.log("Creando usuario...");
        // Instanciar nuevo usuario
        const nuevoUsuario = new Usuario(nombre, correo);

        // Guardar en arreglo de usuarios
        usuarios.push(nuevoUsuario);
        console.log("Usuario creado");

    } else {
        console.log("Error: Nombre o correo inválidos.");
    }
}

// Función para mostrar usuarios
function mostrarUsuarios() {
    console.log("--- Usuarios ---");
    usuarios.forEach((usuario, i) => {
        console.log(`${i + 1}. ${usuario.nombre} - ${usuario.correo}`);
    });
}

// Función para buscar usuarios
function buscarUsuario() {
    let nombreBuscado = prompt("Ingresa el nombre a buscar:");
    let resultado = usuarios.find(usuario => usuario.nombre === nombreBuscado);

    if (resultado) {
        console.log("Usuario encontrado.");
        console.log(`Nombre: ${resultado.nombre}`);
        console.log(`Correo: ${resultado.correo}`);
    } else {
        console.log(`Usuario ${nombreBuscado} no encontrado.`);
    }
}

// -------------- Mensajes del sistema --------------

// Menú
const menu = `¿Qué deseas hacer?
1. Crear usuario
2. Mostrar usuarios
3. Buscar usuario
4. Salir`;

// Mensaje salida
const mensajeSalida = "Saliendo del programa..."

// Mensaje opción inválida
const opcionInvalida = "Opción inválida."


let opcion = "";

// -------------- Bucle principal --------------
do {
    // Pedir la opción dentro del bucle
    opcion = prompt(menu);

    switch (opcion) {
        case "1":
            crearUsuarios();
            break;

        case "2":
            mostrarUsuarios();
            break;

        case "3":
            buscarUsuario();
            break;

        case "4":
            console.log(mensajeSalida);
            break;

        default:
            console.log(opcionInvalida);
            break;
    }

} while (opcion !== "4");