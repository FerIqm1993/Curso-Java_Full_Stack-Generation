# Explicación: Modularización y Fetch API

Este documento detalla dos conceptos clave implementados en la `version_A` de nuestro proyecto: la separación del código en módulos (Modularización) y la interacción con servidores externos (Fetch API).

---

## 1. Modularización en JavaScript (ES6)

A medida que un proyecto crece, tener todo el código en un solo archivo `main.js` se vuelve muy difícil de leer y mantener. La **modularización** nos permite dividir nuestro código en múltiples archivos pequeños, donde cada uno tiene una responsabilidad única (por ejemplo, uno para el tema y otro para la conexión con el servidor).

### El atributo `type="module"`
Para que el navegador entienda que estamos usando archivos separados, debemos avisarle desde el HTML agregando `type="module"`:
```html
<script type="module" src="./js/main.js"></script>
```

### Exportar e Importar
Para que un archivo pueda compartir sus funciones con otro, usamos la palabra reservada `export`. 

En `theme.js` y `api.js`:
```javascript
export function cambiarTema() { ... }
export async function obtenerDatos() { ... }
```

En nuestro archivo principal `main.js`, "traemos" esas funciones usando `import`:
```javascript
import { cambiarTema } from "./theme.js";
import { obtenerDatos } from "./api.js";

cambiarTema(); // Ejecutamos la función importada
```
> [!NOTE]
> `main.js` actúa como nuestro "director de orquesta". Solo importa las piezas y decide en qué momento ejecutarlas.

---

## 2. Fetch API y CRUD (`api.js`)

La **Fetch API** es una herramienta moderna de JavaScript que nos permite hacer peticiones a un servidor a través de la red (por ejemplo, para pedir o guardar datos en una base de datos).

Para trabajar de forma fluida y que la página no se congele mientras espera una respuesta de internet, utilizamos funciones asíncronas (`async / await`).

### Operaciones CRUD
CRUD son las siglas de *Create, Read, Update, Delete* (Crear, Leer, Actualizar y Borrar). Así es como funcionan los métodos en `api.js`:

#### A) Obtener Datos (GET) - *Read*
```javascript
const respuesta = await fetch(API_URL);
const datos = await respuesta.json();
```
Es el método por defecto de `fetch`. Va a la URL, descarga la información y la convierte a formato JSON (un formato que JavaScript puede entender fácilmente).

#### B) Crear Datos (POST) - *Create*
```javascript
const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoObjeto)
});
```
Cuando queremos guardar algo nuevo, cambiamos el `method` a `"POST"`. Usamos los `headers` para decirle al servidor "Oye, te estoy mandando un JSON", y en el `body` empacamos nuestro objeto de JavaScript convirtiéndolo a texto con `JSON.stringify()`.

#### C) Actualizar Datos (PUT) - *Update*
```javascript
const respuesta = await fetch(`${API_URL}/${id}`, { 
    method: "PUT",
    // headers y body (igual que en POST)
});
```
Muy similar al POST, pero usamos el método `"PUT"`. Fíjate cómo en la URL le agregamos el `/id` del elemento que queremos modificar (`${API_URL}/${id}`).

#### D) Eliminar Datos (DELETE) - *Delete*
```javascript
const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
});
```
Es el más sencillo. Solo necesitamos apuntar a la URL del elemento específico (`/id`) y usar el método `"DELETE"`. Usualmente no necesitamos enviarle un `body`.

> [!WARNING]
> En todas las peticiones usamos bloques `try...catch` e incluimos `if (!respuesta.ok) throw new Error(...)`. Esta es una muy buena práctica para "atrapar" errores, por ejemplo, si nos quedamos sin internet o el servidor se cae, evitando que todo nuestro sistema colapse.
