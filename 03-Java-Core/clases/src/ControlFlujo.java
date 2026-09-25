public class ControlFlujo {
    public static void main(String[] args) {
        // En lugar de importar, definimos los datos del usuario a evaluar
        int edad = 20;
        boolean tieneSuscripcion = true;
        double saldo = 150.50;

        System.out.println("--- Evaluando Acceso al Sistema ---");

        // 1. Estructura if-else simple
        if (edad >= 18) {
            System.out.println("El usuario es mayor de edad.");
        } else {
            System.out.println(" El usuario es menor de edad.");
        }

        // 2. Estructura if-else con operadores lógicos (AND &&)
        if (edad >= 18 && tieneSuscripcion) {
            System.out.println(" Acceso concedido al contenido Premium.");
        } else {
            System.out.println(" Acceso denegado. Se requiere ser mayor de edad y tener suscripción.");
        }

        // 3. Estructura if-else if
        if (saldo >= 500) {
            System.out.println(" Eres un usuario VIP.");
        } else if (saldo >= 100) {
            System.out.println(" Eres un usuario Regular.");
        } else {
            System.out.println(" Saldo insuficiente para compras.");
        }
    }
}
