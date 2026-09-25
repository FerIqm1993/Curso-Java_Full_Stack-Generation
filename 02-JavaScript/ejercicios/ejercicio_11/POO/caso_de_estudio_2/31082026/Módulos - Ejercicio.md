# Módulos - Ejercicio práctico

## Objetivo

Crear una aplicación sencilla en JavaScript que se ejecute en la consola y que utilice **módulos** para organizar el código en diferentes archivos.

Durante el ejercicio practicarás:

* Variables y arreglos.
* Funciones.
* Condiciones.
* Ciclos.
* Clases y objetos.
* Validación de datos.
* Exportación e importación de módulos.
* Organización de un programa en diferentes archivos.

> **Nivel:** Básico

---

## 1. Prepara tu proyecto

Crea una carpeta para tu aplicación con la siguiente estructura:

```text
mi-aplicacion/
│
├── index.html
│
└── javaScript/
    ├── main.js
    ├── validaciones.js
    └── usuario.js
```

El archivo `index.html` únicamente se utilizará para ejecutar tu programa.

Dentro del `<body>`, conecta `main.js` como un módulo.

**Investiga:** ¿qué diferencia existe entre utilizar un `<script>` normal y un `<script type="module">`?

---

# 2. Crea la clase Usuario

Comienza trabajando en `usuario.js`.

Crea una clase llamada `Usuario`.

La clase debe tener únicamente dos atributos:

* `nombre`
* `correo`

Define un constructor que permita recibir estos dos datos al momento de crear un usuario.

Por ejemplo, la idea será poder hacer algo similar a:

```javascript
const usuario = new Usuario("Ana", "ana@ejemplo.com");
```

Después, **exporta la clase** para que pueda utilizarse desde `main.js`.

### Actividad de investigación

Antes de continuar, investiga:

* ¿Qué significa `export` en JavaScript?
* ¿Qué significa `import`?
* ¿Cuál es la diferencia entre `export default` y un `export` nombrado?

No es necesario que utilices ambas formas. Elige una y utilízala de manera consistente en tu ejercicio.

---

# 3. Crea las funciones de validación

Ahora trabaja en `validaciones.js`.

Crea y exporta las siguientes funciones:

### `validarCorreo(correo)`

Esta función recibirá un correo y deberá determinar si es válido.

Para este ejercicio, considera válido únicamente un correo que tenga una estructura similar a:

```text
correo@ejemplo.com
```

Puedes utilizar expresiones regulares para realizar la validación.

**Pista:** investiga cómo utilizar una expresión regular con el método `.test()`.

La función deberá regresar:

```javascript
true
```

cuando el correo sea válido y:

```javascript
false
```

cuando no lo sea.

---

### `validarNombre(nombre)`

Esta función recibirá un nombre y deberá comprobar que:

* Tenga **3 caracteres o más**.
* Contenga únicamente letras de la `a` a la `z`.
* Permita letras mayúsculas y minúsculas.

Por ejemplo:

```text
Carlos       → válido
Ana          → válido
Jo           → no válido
Carlos123    → no válido
Juan_Perez   → no válido
```

La función también deberá regresar `true` o `false`.

**Pista:** puedes utilizar una expresión regular.

---

# 4. Investiga: ¿por qué utilizar funciones de validación?

Antes de continuar, piensa en la siguiente situación:

Imagina que `main.js` contiene todo el código para solicitar datos, validar nombres, validar correos, crear usuarios y mostrar información.

El programa podría funcionar, pero el archivo comenzaría a crecer rápidamente.

Investiga brevemente:

> ¿Qué ventajas tiene separar las funciones de validación en un archivo independiente?

Escribe **al menos dos ventajas** en tus comentarios dentro del código.

---

# 5. Construye la aplicación principal

Ahora trabaja en `main.js`.

Este archivo será el encargado de controlar el funcionamiento de toda la aplicación.

Importa:

* La clase `Usuario`.
* `validarNombre()`.
* `validarCorreo()`.

Después crea un arreglo inicialmente vacío:

```javascript
const usuarios = [];
```

Este arreglo almacenará todos los usuarios creados durante la ejecución del programa.

---

# 6. Solicita los datos del usuario

Utiliza `prompt()` para solicitar:

1. Nombre.
2. Correo.

Antes de crear el usuario, deberás comprobar que ambos datos sean válidos.

Por ejemplo:

```text
Nombre: Carlos
Correo: carlos@ejemplo.com
```

Si ambos datos son válidos, crea un objeto utilizando la clase `Usuario` y agrégalo al arreglo `usuarios`.

Si alguno de los datos no es válido, muestra un mensaje indicando cuál es el problema.

---

# 7. Evita crear usuarios con datos incorrectos

Existe un problema que debes resolver:

¿Qué debería suceder si el usuario introduce un nombre incorrecto?

Por ejemplo:

```text
Nombre: J
Correo: carlos@ejemplo.com
```

En este caso **no deberías crear el usuario**.

Lo mismo debe suceder si el correo no es válido.

### Actividad de lógica

Investiga cómo puedes utilizar una condición para permitir la creación del usuario únicamente cuando:

```text
nombre válido
        Y
correo válido
```

sean verdaderos.

**Pista:** investiga el operador lógico `&&`.

---

# 8. Permite crear varios usuarios

La aplicación no debe terminar después de crear un solo usuario.

Utiliza un ciclo `do...while` para permitir que el usuario pueda realizar varias operaciones.

Puedes utilizar un menú sencillo:

```text
¿Qué deseas hacer?

1. Crear usuario
2. Mostrar usuarios
3. Salir
```

El programa deberá continuar ejecutándose mientras el usuario no seleccione la opción `3`.

---

# 9. Agrega la opción "Mostrar usuarios"

Cuando el usuario seleccione la opción `2`, muestra en la consola todos los usuarios almacenados en el arreglo.

Por ejemplo:

```text
Usuarios registrados:

1. Ana - ana@ejemplo.com
2. Carlos - carlos@ejemplo.com
3. Pedro - pedro@ejemplo.com
```

**Importante:** no es necesario utilizar métodos avanzados. Puedes resolverlo utilizando un ciclo que recorra el arreglo.

### Actividad de investigación

Investiga:

> ¿Cómo recorrer un arreglo utilizando un ciclo `for`?

Después utiliza ese ciclo para mostrar los usuarios registrados.

---

# 10. Mejora pequeña: buscar un usuario

Si terminaste las actividades anteriores, agrega una nueva opción al menú:

```text
1. Crear usuario
2. Mostrar usuarios
3. Buscar usuario
4. Salir
```

La opción `3` deberá solicitar un nombre y buscarlo dentro del arreglo.

Si encuentra un usuario, muestra sus datos.

Por ejemplo:

```text
Ingresa el nombre que deseas buscar:

Carlos

Usuario encontrado:
Nombre: Carlos
Correo: carlos@ejemplo.com
```

Si no encuentra ningún usuario:

```text
No se encontró ningún usuario con ese nombre.
```

### Actividad de investigación

Investiga cómo utilizar el método:

```javascript
find()
```

para buscar un elemento dentro de un arreglo.

**No es obligatorio utilizar `find()`.** Primero intenta resolverlo utilizando un ciclo `for`. Después compara tu solución con `find()`.

---

# 11. Reflexiona sobre la organización del programa

Una vez terminada la aplicación, revisa nuevamente tus tres archivos.

Pregúntate:

### `main.js`

¿Qué responsabilidades tiene?

### `validaciones.js`

¿Qué responsabilidades tiene?

### `usuario.js`

¿Qué responsabilidades tiene?

Después responde mediante comentarios en `main.js:

> ¿Qué problemas podrían aparecer si colocáramos todo el código de la aplicación dentro de un único archivo?

---

# Resultado esperado

Al finalizar, tu aplicación deberá permitir:

* Crear usuarios.
* Validar nombres.
* Validar correos.
* Almacenar usuarios en un arreglo.
* Mostrar los usuarios registrados.
* Mantener la aplicación funcionando mediante un ciclo.
* Buscar usuarios.
* Separar las responsabilidades del programa en diferentes archivos.
* Importar y exportar funciones y clases utilizando módulos.

La aplicación deberá tener una estructura similar a:

```text
mi-aplicacion/
│
├── index.html
│
└── javaScript/
    ├── main.js
    ├── validaciones.js
    └── usuario.js
```

## Pregunta final

Responde en un comentario dentro de tu código:

> ¿Qué ventaja principal encontraste al dividir el programa en diferentes módulos en lugar de escribir todo en `main.js`?
