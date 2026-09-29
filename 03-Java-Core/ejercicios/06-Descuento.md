# Ejercicio: Aplicación de Descuento

**Instrucción:**
Crea un programa que calcule el precio final de un artículo tras aplicar un cupón de descuento. El programa debe pedir al usuario el precio original del artículo y el código de descuento a aplicar.

### Requerimientos:
1. Pide al usuario que ingrese el **precio del artículo** (puede tener decimales).
2. Pide al usuario que ingrese el **código de descuento**.
3. Realiza una validación inicial:
   - Si el precio es menor o igual a `0`, o si el código está en blanco, el programa debe mostrar un mensaje de error: `"ERROR: Los datos que ingresaste tienen un formato incorrecto. Inténtalo de nuevo"`.
4. Si los datos son correctos, evalúa el código ingresado:
   - Si el código es exactamente `"DESCUENTO10"`, aplica un 10% de descuento al precio original y marca el código como válido.
   - Si el código es distinto, no apliques el descuento y marca el código como inválido.
5. Finalmente, imprime un ticket o detalle de compra en consola que incluya:
   - El precio original.
   - El código ingresado.
   - Si el código fue válido o no (`true`/`false`).
   - El precio final a pagar (con o sin descuento aplicado).
   - Un mensaje de agradecimiento.

---

### Ejemplo de salida esperada (Caso con descuento):
```
Ingresa el precio del artículo:
100
Ingresa el código de descuento:
DESCUENTO10
=== Detalle de compra ===
Precio original: 100.0
Codigo ingresado: DESCUENTO10
Es válido: true
Precio final: $90.0 mxn
Gracias por tu compra. Buen día
```

### Ejemplo de salida esperada (Caso con error):
```
Ingresa el precio del artículo:
-50
Ingresa el código de descuento:
DESCUENTO10
=== Detalle de compra ===
ERROR: Los datos que ingresaste tienen un formato incorrecto. Inténtalo de nuevo
```
