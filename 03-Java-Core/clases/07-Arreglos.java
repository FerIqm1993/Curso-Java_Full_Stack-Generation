class Arreglos {
    public static void main(String[] args) {
        
        /* ============================================================
           FORMA 1: Declarar el tamaño vacío primero y llenarlo después
           Útil cuando sabes cuántos elementos habrá, pero aún no 
           sabes exactamente cuáles son sus valores.
           ============================================================ */
        String[] estudiantes = new String[3]; // Un arreglo donde caben 3 textos
        
        estudiantes[0] = "Fernando"; // Recuerda: ¡los índices siempre empiezan en 0!
        estudiantes[1] = "Ana";
        estudiantes[2] = "Carlos";

        System.out.println("El primer estudiante es: " + estudiantes[0]);


        /* ============================================================
           FORMA 2: Declarar y llenar en la misma línea
           Útil cuando ya conoces los valores desde el inicio.
           ============================================================ */
        int[] calificaciones = { 90, 85, 100, 75, 98 };

        System.out.println("La tercera calificación es: " + calificaciones[2]); // Imprime 100


        /* ============================================================
           RECORRER UN ARREGLO (El pan de cada día)
           La forma más común de leer un arreglo es con un bucle 'for'
           usando la propiedad '.length' (que nos dice su tamaño).
           ============================================================ */
        System.out.println("\n--- Lista completa de calificaciones ---");
        for (int i = 0; i < calificaciones.length; i++) {
            System.out.println("Calificación " + (i + 1) + ": " + calificaciones[i]);
        }
    }
}
