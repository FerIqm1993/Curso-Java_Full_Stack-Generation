# Ejercicio: Contar registros procesados

Crea un programa que reciba un número **n (cantidad de registros a procesar)** a través de un **Scanner**, y muestre en consola un mensaje por cada registro procesado, de la siguiente manera:

* Proceso 1 registrado...
* Proceso n registrado...

Cuando se hayan completado todos los registros, mostrar en consola:
* Todos los procesos han sido registrados con éxito.

---

### 💡 Pistas y Consejos:

1. **Entrada de usuario**: Recuerda importar `java.util.Scanner` para poder leer la cantidad de registros que el usuario va a ingresar.
2. **Ciclo**: Vas a necesitar una estructura de control repetitiva. Dado que sabes exactamente cuántas veces debe repetirse (de 1 a $n$), un bucle `for` es ideal para esta tarea.
3. **Impresión**: Dentro del ciclo, concatena el texto "Proceso " con el valor de tu variable contadora (por ejemplo, `i`), y finalmente añade " registrado...".
4. **Mensaje Final**: El mensaje "Todos los procesos han sido registrados con éxito." debe imprimirse **fuera** y **después** del ciclo, para que solo aparezca una vez al terminar todo.
5. **Cerrar Scanner**: Es una buena práctica cerrar el objeto `Scanner` (ej. `scanner.close();`) al final de tu programa para liberar recursos.
