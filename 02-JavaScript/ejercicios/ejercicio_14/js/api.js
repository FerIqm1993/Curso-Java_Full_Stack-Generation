// ==========================================
// MÓDULO: ESQUELETOS PARA FETCH API (CRUD BÁSICO)
// ==========================================

// Usaremos DummyJSON para demostrar los POST/PUT/DELETE ya que
// permite simular modificaciones (FakeStore también lo permite, pero
// usaremos ambas para variedad).
const API_URL_GET = "https://fakestoreapi.com/products"; // Ejemplo GET FakeStore
const API_URL_CRUD = "https://dummyjson.com/products";   // Ejemplo CRUD DummyJSON

// 1. GET - Obtener datos (Leer desde FakeStore)
export async function obtenerDatos() {
    try {
        const respuesta = await fetch(API_URL_GET);
        if (!respuesta.ok) throw new Error("Error en la petición GET");
        const datos = await respuesta.json();
        console.log("FakeStore - Datos obtenidos (GET):", datos);
    } catch (error) {
        console.error("Hubo un problema con la petición Fetch GET:", error);
    }
}

// 2. POST - Enviar/Crear nuevos datos (En DummyJSON)
export async function crearDato(nuevoObjeto) {
    try {
        // DummyJSON pide POST hacia /products/add
        const respuesta = await fetch(`${API_URL_CRUD}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Indicamos que enviamos formato JSON
            },
            body: JSON.stringify(nuevoObjeto) // Convertimos el objeto JavaScript a texto JSON
        });
        if (!respuesta.ok) throw new Error("Error al crear el dato");
        const datosCreados = await respuesta.json();
        console.log("DummyJSON - Dato creado exitosamente (POST):", datosCreados);
    } catch (error) {
        console.error("Hubo un error en POST:", error);
    }
}

// 3. PUT - Actualizar un dato existente (En DummyJSON)
export async function actualizarDato(id, datoActualizado) {
    try {
        // En PUT solemos enviar el ID en la URL
        const respuesta = await fetch(`${API_URL_CRUD}/${id}`, { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datoActualizado)
        });
        if (!respuesta.ok) throw new Error("Error al actualizar el dato");
        const datos = await respuesta.json();
        console.log("DummyJSON - Dato actualizado (PUT):", datos);
    } catch (error) {
        console.error("Hubo un error en PUT:", error);
    }
}

// 4. DELETE - Eliminar un dato (En DummyJSON)
export async function eliminarDato(id) {
    try {
        const respuesta = await fetch(`${API_URL_CRUD}/${id}`, {
            method: "DELETE" // DELETE usualmente no necesita 'body'
        });
        if (!respuesta.ok) throw new Error("Error al eliminar el dato");
        const datosBorrados = await respuesta.json();
        console.log(`DummyJSON - Dato con ID ${id} eliminado correctamente (DELETE):`, datosBorrados);
    } catch (error) {
        console.error("Hubo un error en DELETE:", error);
    }
}
