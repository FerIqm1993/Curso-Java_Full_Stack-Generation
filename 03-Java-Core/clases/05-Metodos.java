class Metodos {
    public static void main(String[] args) {
        // ################ Pruebas de los métodos en main ################

        // Probar el método saludarUsuario
        String saludo = saludarUsuario("Fernando");
        System.out.println(saludo); // Mostrar mensaje de salida

        // Probar el método calcularVelocidad
        double velocidad = calcularVelocidad(100.0, 2.5);

        // Mensaje en consola de ayuda
        System.out.printf("La velocidad del objeto (distancia / tiempo) es: %.2f\n", velocidad);

        // Probar el método calcularVolumenEsfera
        double radio = 5.0;
        double volumen = calcularVolumenEsfera(radio);

        // Mensaje en consola de ayuda
        System.out.printf("El volumen de la esfera de radio %.2f unidades es: %.2f\n unidades cúbicas.", radio,
                volumen); // 5 de radio
    }

    // ################ Métodos ################

    // Método para saludar usuario
    static String saludarUsuario(String nombre) {
        // Formar mensajes de saludo
        String saludo = "Hola, " + nombre + "!";

        return saludo;
    }

    // Método calcular velocidad
    static double calcularVelocidad(double distancia, double tiempo) {

        // Cálcular de la velocidad
        double velocidad = distancia / tiempo;

        // Devolver valores calculados
        return velocidad;
    }

    // Método volúmen de esfera
    static double calcularVolumenEsfera(double radio) {

        // Cálcular del volumen
        double volumen = (4.0 / 3.0) * Math.PI * Math.pow(radio, 3);

        return volumen;
    }
}
