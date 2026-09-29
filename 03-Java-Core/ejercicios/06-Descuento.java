import java.util.Scanner;

class Descuento {
    public static void main(String[] args) {

        // Creo mi scanner para leer los datos
        Scanner sc = new Scanner(System.in);

        // Primer dato: precio
        System.out.print("Ingresa el precio del producto: ");
        double precio = sc.nextDouble(); // Recibe el dato (solo guarda el número)

        sc.nextLine(); // Hace un enter o salto de linea

        // Segundo dato: codigo
        System.out.print("Ingresa el código promocional: ");
        String codigo = sc.nextLine(); // Lee el string hasta que se presiona enter.

        double precioFinal;
        boolean codigoValido;
        double descuento = 0.10;

        // Lógica del programa

        System.out.println("=== Detalle de compra ===");

        // Validación: no pasa si el precio es negativo o si el código no se mandó
        if (precio < 0 || codigo.isBlank()) {
            System.out.println("ERROR: Los datos que ingresaste tienen un formato incorrecto. Inténtalo de nuevo");
        } else {

            if (codigo.equals("DESCUENTO010")) {
                precioFinal = precio - (precio * descuento);
                codigoValido = true;
            } else {
                precioFinal = precio;
                codigoValido = false;
            } // codigo.equals("DESCUENTO010")

            System.out.println("Precio original: " + precio);
            System.out.println("Codigo ingresado: " + codigo);
            System.out.println("Es válido: " + codigoValido);
            System.out.println("Precio final: $" + precioFinal + " mxn");
        } // precio < 0 || codigo.isBlank()

        System.out.println("Gracias por tu compra. Buen dia");

    }// main
}// class Descuento