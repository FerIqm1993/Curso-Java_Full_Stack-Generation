# Ejercicio: Sistema Bancario (POO)

## Instrucciones:
Aplica los conceptos de Programación Orientada a Objetos (POO) para modelar una cuenta bancaria. 

## Tu tarea:
1. Crea una clase `CuentaBancaria` que tenga como atributos el `titular` (String) y el `saldo` (double).
2. Implementa un constructor para inicializar la cuenta con un titular y un saldo inicial.
3. Crea métodos para:
   - **Depositar:** Recibe un monto y lo suma al saldo.
   - **Retirar:** Recibe un monto y lo resta del saldo. Implementa validaciones (ej. no se puede retirar si el monto es mayor al saldo disponible).
   - **Consultar Saldo:** Muestra el saldo actual en consola.
4. En la clase principal (`SistemaBancario`), instancia al menos un objeto `CuentaBancaria` y prueba realizar depósitos, retiros y consultas.

**Objetivo:** Entender la creación de clases, objetos, constructores y métodos en Java, así como encapsulamiento y lógica de validación básica.
