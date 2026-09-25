// ==========================================
// MÓDULO: ESQUELETOS PARA FETCH API (CRUD BÁSICO)
// ==========================================

const API_URL = "https://api.ejemplo.com/recurso"; // <- Cambia esto por tu URL real

// 1. GET - Obtener datos (Leer)
export async function obtenerDatos() {
    try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Error en la petición GET");
        const datos = await respuesta.json();
        console.log("Datos obtenidos:", datos);
        // Aquí puedes hacer algo con los datos (ej. pintarlos en el DOM)
    } catch (error) {
        console.error("Hubo un problema con la petición Fetch GET:", error);
    }
}

// 2. POST - Enviar/Crear nuevos datos
export async function crearDato(nuevoObjeto) {
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Indicamos que enviamos formato JSON
            },
            body: JSON.stringify(nuevoObjeto) // Convertimos el objeto JavaScript a texto JSON
        });
        if (!respuesta.ok) throw new Error("Error al crear el dato");
        const datosCreados = await respuesta.json();
        console.log("Dato creado exitosamente:", datosCreados);
    } catch (error) {
        console.error("Hubo un error en POST:", error);
    }
}

// 3. PUT - Actualizar un dato existente
export async function actualizarDato(id, datoActualizado) {
    try {
        // En PUT (o DELETE) solemos enviar el ID en la URL
        const respuesta = await fetch(`${API_URL}/${id}`, { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datoActualizado)
        });
        if (!respuesta.ok) throw new Error("Error al actualizar el dato");
        const datos = await respuesta.json();
        console.log("Dato actualizado:", datos);
    } catch (error) {
        console.error("Hubo un error en PUT:", error);
    }
}

// 4. DELETE - Eliminar un dato
export async function eliminarDato(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE" // DELETE usualmente no necesita 'body'
        });
        if (!respuesta.ok) throw new Error("Error al eliminar el dato");
        console.log(`Dato con ID ${id} eliminado correctamente`);
    } catch (error) {
        console.error("Hubo un error en DELETE:", error);
    }
}
