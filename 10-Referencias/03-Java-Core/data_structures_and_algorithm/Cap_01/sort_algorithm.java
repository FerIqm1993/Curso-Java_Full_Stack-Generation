package Cap_01;
import java.util.Arrays;

public class sort_algorithm {
    public static void main(String[] args) {

        // Crear arreglo de números

        int[] numeros = { 1, 4, 7, 9, 32, 3 };

        // Posición de número más grande a encontrar

        int numMax = 1; // Posición del elemento del arreglo ordenado

        // Ciclo externo: recorre cada elemento en el array 1 a 1

        // i iteramos en el ciclo externo
        for (int i = 0; i < numeros.length; i++) {
            // Mostrar iteraciones
            System.out.println("Iteración: " + (i + 1));

            // k, iteremos en el ciclo interno
            for (int k = 0; k < numeros.length - 1; k++) {
                if (numeros[k] < numeros[k + 1]) {
                    int temp = numeros[k]; // Variable temporal
                    numeros[k] = numeros[k + 1];
                    numeros[k + 1] = temp;
                }
            }

            // Lista final ordenada por iteración
            System.out.println("Lista en Iteración: " + i + " " + java.util.Arrays.toString(numeros) + "\n");
        }

        // Mensaje de salida
        System.out.println("El número en la posición k es: " + numeros[numMax - 1]);
    }
}