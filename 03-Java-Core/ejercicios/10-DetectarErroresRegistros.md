# Detectar errores en registros

Imagina que trabajas con un sistema que lee registros de sensores. Algunas lecturas llegan con errores (por debajo de 0), como se muestra a continuación:

`lecturas = [5, 12, -3, 8, 0, -1, 14]`

* Muestra en consola solo los **registros sin errores** (lectura >= 0).
* Cuenta el **total de errores** (lectura < 0) detectados y muestra la cantidad en consola.

