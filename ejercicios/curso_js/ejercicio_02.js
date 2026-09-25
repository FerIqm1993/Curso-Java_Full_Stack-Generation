/*
Ejercicio
Mini App de delivery
(35 minutos)

Crear una aplicación llamada: "Mi pedido"
Debe:

Preguntar nombre del cliente.

Preguntar qué comida quiere.

Preguntar su dirección.

Preguntar cuántas piezas quiere.

Guardar todos los datos en variables.

Definir un precio por pieza.

Calcular el subtotal.

Definir un costo de envío.

Calcular el total.

Definir un tiempo estimado de entrega.

Mostrar un resumen utilizando template literals.

Ejemplo de salida (consola/pantalla):

===== MI PEDIDO =====

Cliente: Ana
Platillo: Tacos
Cantidad: 3

Subtotal: $180
Envío: $40
Total: $220

Tiempo estimado: 35 minutos

¡Gracias por tu pedido, Ana!

*/


// Llamar prompt-sync para ejecutar prompts con Node
const prompt = require("prompt-sync")();

// Solicitar datos del cliente
let nombre_cliente = prompt("Escriba su nombre: ");
let platillo = prompt("Escriba el platillo a ordenar: ");
let direccion = prompt("Escriba su dirección completa: ");
let cantidad = Number(prompt("Escriba la cantidad de piezas: ")); // Cambiar el tipo de dato a numérico

// Definir precios
let precio_por_pieza = 60;
const costo_envio = 40; // Fijo para cada pedido

// Definir precio total
let subtotal_pedido = precio_por_pieza * cantidad
let total_pedido = subtotal_pedido + costo_envio

// Tiempo estimado de entrega
let tiempo_entrega = 35

// Mostrar en consola pedido

console.log(`===== MI PEDIDO =====

Cliente: ${nombre_cliente}
Platillo: ${platillo}
Cantidad: ${cantidad}

Subtotal: $${subtotal_pedido.toFixed(2)}
Envío: $${costo_envio.toFixed(2)}
Total: $${total_pedido.toFixed(2)}

Tiempo estimado: ${tiempo_entrega} minutos

¡Gracias por tu pedido, ${nombre_cliente}!`);
