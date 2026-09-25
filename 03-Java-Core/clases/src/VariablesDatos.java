public class VariablesDatos {
    // Ejecutar mi aplicación -> Main

    public static void main(String[] args) {
        // Declaración de una variable: tipo nombre = valor;

        // --- TIPOS PRIMITIVOS ---

        // 1. Números enteros
        byte edad = 25; // Enteros pequeños (-128 a 127)
        short sueldo = 10000; // Enteros medianos (-32,768 a 32,767)
        int idUsuario = 123456789; // Enteros hasta aprox. 2 mil millones (el más usado)
        long lightYear = 14000000000L; // Enteros demasiado grandes (requiere la 'L' al final)

        // 2. Números decimales (punto flotante)
        float estatura = 1.76F; // Decimales de precisión simple (requiere la 'F' al final)
        double fuerza = 52.33; // Mayor precisión, decimal por defecto en Java

        // 3. Caracteres (comillas simples)
        char calificacion = 'A'; // Un solo carácter
        char letraUnicode = '\u0041'; // Carácter en formato Unicode (por ejemplo, '\u0041' es 'A')

        // 4. Booleanos (valores lógicos)
        boolean esMayorDeEdad = true; // Solo acepta 'true' (verdadero) o 'false' (falso)
        boolean tieneDescuento = false;

        // 5. Objetos de referencia
        String mensaje = "Saludos Ch72";

        // 6. Constantes - final
        final double pi = 3.1416;

        // --- TIPOS DE REFERENCIA COMUNES ---

        // 5. Cadenas de texto (Comillas dobles)
        // String no es un tipo primitivo (es una Clase), pero es esencial.
        String nombre = "Juan Pérez"; 

        System.out.println("Las variables compilan y están listas para usarse.");
    }
}

