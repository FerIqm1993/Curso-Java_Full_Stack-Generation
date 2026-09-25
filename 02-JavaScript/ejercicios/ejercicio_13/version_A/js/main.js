// Importamos las funciones de nuestros módulos
import { cambiarTema } from "./theme.js";
import { obtenerDatos, crearDato, actualizarDato, eliminarDato } from "./api.js";

// 1. Inicializamos el manejo del tema (Web Storage)
cambiarTema();

// =========================================================
// 2. USO DE LA API (Fetch API)
// =========================================================

// Cuando encuentres una API, puedes usar los métodos así:
// obtenerDatos();
// crearDato({ nombre: "Fernando", edad: 25 });
// actualizarDato(1, { nombre: "Alberto", edad: 30 });
// eliminarDato(1);
