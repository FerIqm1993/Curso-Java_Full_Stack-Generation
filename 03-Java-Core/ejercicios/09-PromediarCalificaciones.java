class PromediarCalificaciones {
    public static void main(String[] args) {

        // Recorrer el arreglo y sumar cada valor en una
        // variable total y dividirlo con el total de elementos

        // Crear arreglo con calificaciones
        double[] calificaciones = { 4.3, 5.0, 4.1, 4.4, 3.1, 4.0 };

        // Variables
        double total = 0;

        // Ciclo para recorrer el arreglo
        for (int i = 0; i < calificaciones.length; i++) {
            total += calificaciones[i];
        }

        // Calcular promedio
        double promedio = total / calificaciones.length;

        // Mostrar valor promedio en consola
        System.out.printf("El valor promedio es: %.1f\n", promedio);

    }

}
