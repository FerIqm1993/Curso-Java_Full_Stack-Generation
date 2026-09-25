// Importamos las funciones de nuestros módulos
import { cambiarTema } from "./theme.js";
import { obtenerDatos, crearDato, actualizarDato, eliminarDato } from "./api.js";
// Importamos nuestros nuevos módulos para las peticiones Fetch
import { inicializarFetch, inicializarFetchUsuarios } from "./fetch.js";

// =========================================================
// 1. Inicializamos el manejo del tema (Web Storage)
// =========================================================
// Llama a la función que configura el evento del botón de tema
cambiarTema();

// =========================================================
// 2. Inicializamos el manejo de los botones Fetch (FakeStore y DummyJSON)
// =========================================================
// Llama a la función que trae productos (FakeStore)
inicializarFetch();
// Llama a la función que trae usuarios (DummyJSON)
inicializarFetchUsuarios();

// =========================================================
// 3. OTRAS APIs (Opcional - api.js anterior)
// =========================================================
// En el archivo api.js, ahora hemos configurado ejemplos reales de CRUD
// usando DummyJSON y FakeStore, puedes llamar a esas funciones si deseas
// ver cómo se comunican las APIs en la consola (F12).
// obtenerDatos();
// crearDato({ nombre: "Fernando", edad: 25 });
// actualizarDato(1, { nombre: "Alberto", edad: 30 });
// eliminarDato(1);
