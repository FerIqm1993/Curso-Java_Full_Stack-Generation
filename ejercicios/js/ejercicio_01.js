/*

Operaciones

Imagina que estás programando el sistema de cobro de una tienda de electrónica. 
Un cliente quiere comprar una laptop, pero hoy la tienda tiene un descuento especial y, 
además, debemos sumarle el impuesto (IVA).

Tus variables iniciales son:

* **precio_original** = 10000 (El precio de la laptop en pesos)
* **porcentaje_descuento** = 0.15 (Equivale al 15% de descuento)
* **tasa_iva** = 0.16 (Equivale al 16% de IVA)

---

**Instrucciones:**
Crea las fórmulas necesarias utilizando las variables anteriores para calcular lo siguiente paso a paso:

1. **monto_descuento:** Calcula cuánto dinero se le va a restar al precio original.
2. **precio_con_descuento:** Calcula el precio del producto tras restar el descuento.
3. **monto_iva:** Calcula el IVA aplicando la tasa sobre el precio con descuento
4. **precio_final:** Suma el precio_con_descuento y el monto_iva para obtener el total que pagará el cliente.

*/

// Definir variables 
let precio_original = 10000;
let porcentaje_descuento = 0.15;
let tasa_iva = 0.16;

// Calcular monto de descuento
let monto_descuento = precio_original * porcentaje_descuento;

// Calcular precio con descuento
let precio_con_descuento = precio_original - monto_descuento;

// Calcular monto con IVA
const iva = 0.16 // Difinir iva como constante
monto_iva = precio_con_descuento * iva;

// Calcular precio final
precio_final = precio_con_descuento + monto_iva;

// Mostrar en consola los cálculos
console.log(`Su precio original es: $${precio_original.toFixed(2)}\n`);
console.log(`Su precio con descuento es: $${precio_con_descuento.toFixed(2)}\n`)
console.log(`Su precio con IVA de : ${iva * 100}% es de : $${precio_final.toFixed(2)}\n`)

