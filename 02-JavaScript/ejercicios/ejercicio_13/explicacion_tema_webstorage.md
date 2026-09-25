# Explicación del Código: Modo Oscuro con LocalStorage

Este documento explica detalladamente cómo funciona el código de `version_A/js/main.js`. El objetivo principal de este código es permitir al usuario cambiar entre un tema claro y oscuro, y **recordar su elección** incluso si cierra la pestaña o recarga la página, utilizando `localStorage`.

---

## 1. La Función Principal

Todo el código está envuelto dentro de una función llamada `cambiarTema()`. 

```javascript
function cambiarTema() {
    // ... todo el código ...
}
cambiarTema(); // Al final, ejecutamos la función
```
> [!NOTE]
> Envolver nuestro código en una función ayuda a mantener las variables protegidas para que no interfieran con otros scripts de la página. Al final del archivo, mandamos llamar `cambiarTema()` para que se ejecute en cuanto carga la página.

---

## 2. Seleccionando los Elementos del DOM

Lo primero que hace la función es ubicar los elementos HTML con los que vamos a interactuar:

```javascript
const temaBtn = document.getElementById("temaBtn");
const html = document.querySelector("html");
let temaActual;
```

*   `temaBtn`: Busca nuestro botón usando su identificador (`id="temaBtn"`).
*   `html`: Selecciona la etiqueta principal `<html>` de la página. Es aquí donde Bootstrap inserta el modo oscuro.
*   `temaActual`: Es una variable vacía que usaremos más adelante para saber en qué tema estamos ("light" o "dark").

---

## 3. Revisando el Historial (LocalStorage) al Cargar

Cuando entramos a la página, necesitamos saber si el usuario ya había elegido un tema antes.

```javascript
if( localStorage.getItem("tema") != null ){ 
    temaActual = localStorage.getItem("tema"); 
    html.setAttribute("data-bs-theme", temaActual); 
} else { 
    localStorage.setItem("tema", "light"); 
    temaActual = localStorage.getItem("tema"); 
    html.setAttribute("data-bs-theme", temaActual); 
}
```

> [!TIP]
> `localStorage` es como un pequeño cajón de memoria en el navegador web del usuario. Puede guardar datos en forma de llave y valor (por ejemplo, Llave: `"tema"`, Valor: `"dark"`).

**¿Qué hace este bloque `if / else`?**
*   **El `if`**: Con `getItem("tema")` revisa si existe un tema guardado en el cajón. Si `!= null` (es decir, si **sí existe** algo guardado), lo lee, lo guarda en la variable `temaActual` y se lo aplica a la etiqueta `<html>` con `setAttribute`.
*   **El `else`**: Si el usuario entra por primera vez (no hay nada guardado y es igual a `null`), entonces le creamos un valor por defecto usando `setItem("tema", "light")`. Luego lo aplicamos a la página.

---

## 4. Escuchando el Clic del Botón

Ahora que la página ya cargó con un tema, necesitamos darle funcionalidad al botón para que pueda intercambiarlos.

```javascript
temaBtn.addEventListener("click", () => {
    // ...
});
```
`addEventListener` hace que nuestro botón se quede "escuchando" y esperando a que suceda un evento de tipo `"click"`. Cuando ocurre, se ejecuta el código que está dentro de las llaves.

---

## 5. Cambiando el Tema y Guardándolo

Dentro del evento click, preguntamos cuál es el tema actual para poder poner el contrario:

```javascript
if (temaActual === "light") { 
    html.setAttribute("data-bs-theme", "dark"); 
    temaActual = html.getAttribute("data-bs-theme"); 
    localStorage.setItem("tema", temaActual);
} else {
    html.setAttribute("data-bs-theme", "light"); 
    temaActual = html.getAttribute("data-bs-theme"); 
    localStorage.setItem("tema", temaActual);
}
```

**Paso a paso de lo que ocurre al hacer clic:**
1.  **Evaluamos (`if / else`)**: Si el tema actual es `"light"`, lo cambiamos a `"dark"`. Si era `"dark"`, entra en el `else` y lo cambiamos a `"light"`.
2.  **Aplicamos al HTML**: Usamos `html.setAttribute("data-bs-theme", "nuevo-tema")` para que Bootstrap cambie los colores de la pantalla inmediatamente.
3.  **Actualizamos la variable**: Usamos `getAttribute` para leer el nuevo tema que le acabamos de poner al HTML, y así actualizar nuestra variable interna `temaActual`.
4.  **Guardamos en el cajón (`localStorage.setItem`)**: ¡Esta es la parte más importante! Guardamos en `localStorage` nuestro nuevo tema. Así, la próxima vez que el usuario recargue la página, el bloque de código del **Paso 3** leerá este nuevo valor y lo aplicará desde el principio.

> [!IMPORTANT]
> Si no pusiéramos `localStorage.setItem` aquí adentro, la página cambiaría de color, pero al recargar volvería a su estado original, ya que el navegador "olvidaría" que hicimos clic.
