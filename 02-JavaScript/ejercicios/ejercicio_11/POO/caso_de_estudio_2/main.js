/*
Una reconocida pltaforma de delivery acaba de contratarte para diseñar y desarrollar
una funcionalidad nueva.

Contexto:

Nuestra plataforma ha tenido mucho éxito últimamente. Gracias a ello, hemos decidido recompensar
a nuestros usuarios pro  con un descuento del 5% por cada orden realizada. Sin excepción.

Datos importantes:
El sistema está construido con un enfoque de POO

Utiliza una clase principal "Person", que define propiedades y métodos
genéricos para cualquier tipo de usuario.

Opcional, pero muy recomendado, una clase Main que sirve únicamente para probar el código
y separar la lógica compleja del sistema.

Las órdenes mayores a $299.99 para usuarios regulares y a $199.99 para usuarios pro incluyen
costo de envío gratuito.

Requisitos:
Clase Person:

    propiedades: id, nombre, email, carrito
    métodos: showData(), addProduct(), addProducts(), calculateTotal()

Clase UserPro and UserRegular:

    propiedades: las hereda de Person + propiedad tipo
    métodos: las hereda de Person. Sobreescriben el método calculateTotal();
*/

// Constantes costo envio, descuentos y costes de ordenes
const costoEnvio = 50;
const descuentoUserPro = 0.05;
const ordenMayorUserRegular = 299.99;
const ordenMayorUserPro = 199.99;


// Crear clase Person
class Person {
    // Definir constructor
    constructor(id, nombre, email, carrito = []) {
        // Atributos de Person
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.carrito = carrito;
    }

    // Métodos de Person

    // Mostrar información básica
    showData() {
        // Mostrar en consola informción básica
        console.log(`Id: ${this.id}`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Email: ${this.email}`)
        // Función para mostrar  cada elemento en carrito
        this.carrito.forEach(item => {
            console.log(item)
        });
    }
    // Agregar producto
    addProduct(producto) {
        this.carrito.push(producto)
    }
    // Agregar productos de un array
    addProducts(productos) {
        productos.forEach(producto => {
            this.addProduct(producto)
        });
    }

    // Calcular total
    calculateTotal() {
        // Iniciar total a calcular
        let total = 0;
        // Recorrer el carrito y pedir el precio de cada producto
        this.carrito.forEach(producto => {
            total += producto.precio

        })
        return total
    }
}

// Crear clase UserRegular
class UserRegular extends Person {

    constructor(id, nombre, email, carrito = []) {
        super(id, nombre, email, carrito)
        this.tipo = "Regular";
    }

    // Calcular total UserRegular
    calculateTotal() {
        // Obtenemos el subtotal del método calculateTotal
        let subtotal = super.calculateTotal();
        return (subtotal > ordenMayorUserRegular) ? (subtotal) : (subtotal + costoEnvio)
    }
}

// Crear clase UserPro
class UserPro extends Person {

    constructor(id, nombre, email, carrito = []) {
        super(id, nombre, email, carrito)
        this.tipo = "Pro";
    }

    calculateTotal() {
        // Obtenemos el subtotal del método calculateTotal
        let subtotal = super.calculateTotal();
        subtotal -= subtotal * descuentoUserPro

        return ((subtotal) > ordenMayorUserPro) ? (subtotal) : (subtotal + costoEnvio)
    }
}

class Main {
    static main() {

        // Probar clase Person
        const julia = new Person(123, "Julia Amado", "julia@gmai.com"); // Instanciar usuario prueba
        console.log(julia);
        julia.addProduct({ nombre: "Sabritas", precio: 25.50 });
        julia.addProduct({ nombre: "Café", precio: 45.00 });
        console.log(julia);
        julia.calculateTotal();
        console.log("Confirmar que funciona la clase Main")

        // Probar clase UserRegular
        const pedro = new UserRegular(1, "Pedro Perez", "pedro@gmail.com");
        pedro.addProduct({ nombre: "Pizza", precio: 200.00 }); // Total < 299.99 (Se le sumarán 50 de envío)
        console.log(`Total Regular (Aplica envío): $${pedro.calculateTotal()}`);

        // Probar clase  UserPro
        const maria = new UserPro(2, "Maria Lopez", "maria@gmail.com");
        maria.addProduct({ nombre: "Sushi", precio: 250.00 }); // Total > 199.99 (Envío gratis + 5% desc)
        console.log(`Total Pro (Envío gratis + descuento): $${maria.calculateTotal()}`);

        // Probar clase Main
        console.log("Confirmar que funciona la clase Main");

    }
}

Main.main();