const fs = require('fs');
const path = require('path');

const exams = {
  // 01-Modulos (Exámenes por sección)
  "09-Examenes/01-Modulos/01-HTML_CSS_Bootstrap.md": "# Examen: HTML, CSS y Bootstrap\n1. ¿Cuál es la diferencia entre `display: none` y `visibility: hidden`?\n2. Explica el Box Model de CSS.\n3. Práctica: Crea un grid responsivo usando solo clases de Bootstrap.",
  "09-Examenes/01-Modulos/02-JavaScript.md": "# Examen: JavaScript\n1. ¿Qué es el Event Loop en JS y cómo funciona?\n2. Diferencia entre `==` y `===`.\n3. Práctica: Escribe una función que devuelva el string invertido sin usar el método `.reverse()`.",
  "09-Examenes/01-Modulos/03-Java_Core.md": "# Examen: Java Core\n1. ¿Cuál es la diferencia entre una Interfaz y una Clase Abstracta?\n2. ¿Cómo funciona el Garbage Collector?\n3. Práctica: Escribe un algoritmo que encuentre el número mayor en un arreglo sin usar librerías de utilidad.",
  "09-Examenes/01-Modulos/04-Bases_De_Datos.md": "# Examen: Bases de Datos (SQL)\n1. ¿Qué es la normalización y cuáles son las primeras 3 formas normales?\n2. Explica la diferencia entre un INNER JOIN y un LEFT JOIN.\n3. Práctica: Escribe un query que obtenga el usuario con más compras en el último mes.",
  "09-Examenes/01-Modulos/05-Spring_Boot.md": "# Examen: Java Spring Boot\n1. ¿Para qué sirve la anotación `@SpringBootApplication`?\n2. ¿Cómo gestionas el ciclo de vida de un Bean y la inyección de dependencias?\n3. Práctica: Construye un endpoint GET que lance una excepción personalizada (`ResourceNotFoundException`) gestionada por `@ControllerAdvice`.",
  "09-Examenes/01-Modulos/06-React.md": "# Examen: React\n1. ¿Qué es el Virtual DOM y por qué React es rápido?\n2. ¿Para qué se utiliza el arreglo de dependencias en `useEffect`?\n3. Práctica: Crea un contador que se incremente automáticamente cada segundo y tenga un botón de Pausa/Reanudar.",

  // 02-Integracion (Conectando tecnologías)
  "09-Examenes/02-Integracion/01-FrontEnd_JS_React.md": "# Examen Integrador: Frontend (Vanilla a React)\n1. Teoría: ¿En qué casos usarías Vanilla JS sobre React y viceversa?\n2. Práctica: Toma el `01-Calculadora.js` de Vanilla y conviértelo a un Componente de React manejando estados.",
  "09-Examenes/02-Integracion/02-BackEnd_Java_SQL.md": "# Examen Integrador: Backend (Spring Data JPA + SQL)\n1. Teoría: ¿Qué es el problema N+1 en Hibernate/JPA y cómo se previene?\n2. Práctica: Crea una relación One-To-Many (Ej: Autor y Libros), e inserta datos desde Spring Boot.",
  "09-Examenes/02-Integracion/03-FullStack_Node_React.md": "# Examen Integrador: FullStack (MERN Básico)\n1. Práctica: Haz un API de Node/Express que devuelva un JSON de productos y consúmelo usando un `fetch` desde un componente React, mostrándolo en tarjetas de Bootstrap.",

  // 04-EntrevistasTecnicas
  "09-Examenes/04-EntrevistasTecnicas/01-PreguntasComunes.md": "# Preguntas Comunes de Pruebas Técnicas\n1. ¿Qué es un API REST y cuáles son los verbos HTTP más usados?\n2. Explica el principio de responsabilidad única (SOLID).\n3. ¿Qué es CORS y cómo lo solucionas en Spring Boot / Node?",
  "09-Examenes/04-EntrevistasTecnicas/02-PruebaDeCodigo.md": "# Pruebas de Algoritmos (Live Coding)\n1. **FizzBuzz**: Imprimir 1 a 100, múltiplos de 3 'Fizz', múltiplos de 5 'Buzz', de ambos 'FizzBuzz'.\n2. **Palíndromo**: Función que determine si un string es igual al revés.\n3. **Dos Sumas (Two Sum)**: Dado un arreglo de enteros, devuelve los índices de 2 números que sumen un valor 'Target'.",

  // 03-Finales (Evaluaciones de Grado)
  "09-Examenes/03-Finales/01-TeoricoFinal.md": "# Examen Teórico Final: Full Stack Jr. / Mid\nEvaluación exhaustiva de 50 preguntas cubriendo Arquitectura Web, Protocolo HTTP, Ciclo de Vida de Software, Patrones de Diseño (Singleton, Factory, MVC), Complejidad Algorítmica (Big O) y Seguridad Básica (XSS, SQL Injection).",
  "09-Examenes/03-Finales/02-PracticoFinal.md": "# Examen Práctico Final en Tiempo Real\n**Reto:** Tienes 4 horas para levantar un microservicio en Spring Boot con conexión a H2 / MySQL, un endpoint público y uno privado con JWT. \nEn el front, debes hacer una pantalla de Login y un Dashboard en React que muestre la información protegida.",
  "09-Examenes/03-Finales/03-ProyectoIntegrador.md": "# 🏆 Proyecto Integrador Final: E-Commerce Completo\n**Descripción:** Diseñar y construir una tienda en línea desde cero.\n\n**Requisitos:**\n- **BD:** Esquema relacional con Usuarios, Roles, Productos, Órdenes y Detalles_Orden.\n- **Backend (Spring Boot):** \n  - CRUD completo de productos (sólo Admin).\n  - Autenticación JWT.\n  - Endpoint para procesar un carrito de compra y crear una Orden.\n- **Frontend (React + Bootstrap):**\n  - Catálogo de productos paginado y con buscador.\n  - Carrito de compras usando Context API.\n  - Pantalla de Checkout / Historial de compras.\n- **Opcional (Mid-level):** Subida de imágenes a un bucket (AWS S3 / Cloudinary) y despliegue a producción (Render, Vercel o AWS)."
};

const baseDir = "c:/cursos/generation";

for (const [relPath, content] of Object.entries(exams)) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log("Created exam: " + relPath);
}
