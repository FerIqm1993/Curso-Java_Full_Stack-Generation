class RetornoMultiple {

    // ============================================================
    // MÉTODO QUE "DEVUELVE" 3 VALORES
    // En lugar de devolver un 'double' normal, devolvemos un 'double[]' (arreglo)
    // ============================================================
    static double[] obtenerEstadisticas() {
        
        // Supongamos que aquí hicimos cálculos muy complejos...
        double promedio = 85.5;
        double calificacionMaxima = 100.0;
        double calificacionMinima = 60.0;

        // Empacamos nuestros 3 valores en un arreglo:
        double[] paqueteDeResultados = { promedio, calificacionMaxima, calificacionMinima };
        
        // ¡Devolvemos el paquete entero!
        return paqueteDeResultados;
    }

    public static void main(String[] args) {
        
        // Al llamar al método, lo que recibimos es un arreglo
        double[] estadisticas = obtenerEstadisticas();

        // Ahora simplemente "desempacamos" los valores usando sus índices
        System.out.println("=== Resultados ===");
        System.out.println("Promedio del grupo: " + estadisticas[0]);
        System.out.println("La nota más alta fue: " + estadisticas[1]);
        System.out.println("La nota más baja fue: " + estadisticas[2]);
    }
}
