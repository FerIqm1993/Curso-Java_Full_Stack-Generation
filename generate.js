const fs = require('fs');
const path = require('path');

const files = {
  "02-JavaScript/clases/02-FuncionesYScopes.js": "// Funciones (Arrow y regulares) y scope de variables (var vs let vs const)",
  "02-JavaScript/clases/03-ArraysYMetodos.js": "// Métodos de arreglos: map, filter, reduce, find, etc.",
  "02-JavaScript/clases/04-ObjetosYClases.js": "// POO en JS, prototypes, clases ES6, destructuring",
  "02-JavaScript/clases/05-Asincronismo.js": "// Callbacks, Promises, async/await y fetch API",
  "02-JavaScript/ejercicios/02-ManipulacionArrays.js": "// Reto: Dado un arreglo de objetos, usar filter y map para obtener resultados.",
  "02-JavaScript/ejercicios/03-ConsumoAPI.js": "// Reto: Crear un script que consuma una API pública usando async/await.",

  "03-Java-Core/clases/02-ControlDeFlujo.java": "public class ControlDeFlujo { public static void main(String[] args) { /* if, switch, for, while */ } }",
  "03-Java-Core/clases/03-POO-ClasesYObjetos.java": "public class ClasesYObjetos { /* Definición de clases, constructores y modificadores de acceso */ }",
  "03-Java-Core/clases/04-POO-HerenciaPolimorfismo.java": "public class HerenciaPolimorfismo { /* extends, implements, super, @Override */ }",
  "03-Java-Core/clases/05-ColeccionesYGenerics.java": "import java.util.*;\npublic class Colecciones { /* List, Set, Map, ArrayList, HashMap */ }",
  "03-Java-Core/clases/06-Excepciones.java": "public class Excepciones { /* try-catch-finally, throws, custom exceptions */ }",
  "03-Java-Core/clases/07-StreamsYLambdas.java": "public class Streams { /* Programación Funcional en Java 8+, Stream API */ }",
  "03-Java-Core/ejercicios/02-SistemaBancario.java": "public class SistemaBancario { /* Reto: Implementar cuenta bancaria con POO y manejo de saldo/excepciones */ }",
  "03-Java-Core/ejercicios/03-ManejoInventario.java": "public class ManejoInventario { /* Reto: Usar Colecciones (HashMap) para guardar y buscar productos */ }",

  "06-Bases-De-Datos/clases/02-JoinsYRelaciones.sql": "-- INNER JOIN, LEFT JOIN, Foreign Keys",
  "06-Bases-De-Datos/clases/03-SubconsultasYVistas.sql": "-- Consultas anidadas y creación de VIEWs",
  "06-Bases-De-Datos/clases/04-Transacciones.sql": "-- BEGIN, COMMIT, ROLLBACK",
  "06-Bases-De-Datos/ejercicios/02-ReporteVentas.sql": "-- Reto: Crear un query que una 3 tablas (Ventas, Productos, Clientes)",

  "07-Java-SpringBoot/clases/02-InyeccionDependencias.md": "# Inyección de Dependencias (@Autowired, @Service, @Component)",
  "07-Java-SpringBoot/clases/03-JPA_Entity_Repository.md": "# Spring Data JPA, Entidades (@Entity), JpaRepository",
  "07-Java-SpringBoot/clases/04-ManejoExcepciones.md": "# @ControllerAdvice y @ExceptionHandler",
  "07-Java-SpringBoot/clases/05-SeguridadJWT.md": "# Spring Security básico y JSON Web Tokens",
  "07-Java-SpringBoot/ejercicios/02-CRUD_Productos.md": "# Reto: Crear una API completa de Productos con JPA y validaciones",
  "07-Java-SpringBoot/ejercicios/03-Autenticacion.md": "# Reto: Proteger un endpoint usando JWT",

  "08-React/clases/02-EstadoYHooks.jsx": "import React, { useState, useEffect } from 'react';\n// Uso de estado local y ciclo de vida (hooks)",
  "08-React/clases/03-EfectosYAPIs.jsx": "// useEffect para consumir datos (fetch/axios) al montar componentes",
  "08-React/clases/04-ContextAPI.jsx": "// Manejo de estado global sin Redux usando createContext",
  "08-React/clases/05-ReactRouter.jsx": "// Navegación SPA con react-router-dom",
  "08-React/ejercicios/02-BuscadorPeliculas.jsx": "// Reto: App que busque películas conectada a OMDB API usando estado y efectos",
  "08-React/ejercicios/03-CarritoCompras.jsx": "// Reto: App con Context API para manejar el carrito de compras a nivel global"
};

const baseDir = "c:/cursos/generation";

for (const [relPath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Created: " + relPath);
}
