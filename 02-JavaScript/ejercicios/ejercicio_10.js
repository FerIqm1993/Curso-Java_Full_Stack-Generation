/* 
Caso de Estudio
Dato un arreglo de objetos.

Realizar:

1. Recorrido por todos los elementos del arreglo
2. Una función en javascript que devuelva un mensaje en consola con los siguientes datos:
    - id de orden
    - estatus
    - productos dentro de la orden
    - total de orden
*/

const prompt = require("prompt-sync")();

const ordenes = [
    {
        id: 112,
        fechaCreacion: "2026-05-16",
        usuario: 343,
        entregado: false,
        articulos: ["cable USB", "cargador 5V", "adaptador USB"],
        total: 551.39,
        imprimirEstatus() {
            console.log("Pedido " + this.id + " entregado:", this.entregado);
        }
    },
    {
        id: 125,
        fechaCreacion: "2026-08-02",
        usuario: 55432,
        entregado: true,
        articulos: ["corbata", "perfume 100 ml"],
        total: 782.99,
        imprimirEstatus() {
            console.log("Pedido " + this.id + " entregado:", this.entregado);
        }
    },
    {
        id: 341,
        fechaCreacion: "2026-11-23",
        usuario: 445,
        entregado: true,
        articulos: ["guitarra eléctrica", "amplificador", "cables"],
        total: 10564.77,
        imprimirEstatus() {
            console.log("Pedido " + this.id + " entregado:", this.entregado);
        }
    }];


const mostrarDatos = (ordenes) => {
    // Recorrer el arreglo de ordenes
    for (let i = 0; i < ordenes.length; i++) {
        const orden = ordenes[i];
        // Mostrar información de ordenes
        console.log("ID de orden: " + orden.id);
        console.log("Estatus: " + (orden.entregado ? "Entregado" : "Pendiente"));
        console.log("Productos: " + orden.articulos);
        console.log("Total: " + orden.total);
        console.log("\n");
    }
}

// Llamamos a la función con nuestro arreglo de ejemplo
mostrarDatos(ordenes);