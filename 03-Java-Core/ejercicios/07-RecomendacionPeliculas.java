
// Librería para usar Scanner
import java.util.Scanner;

class RecomendacionPeliculas {
    // Programa de recomencación de películas
    public static void main(String[] args) {
        // Instanciamos clase Scanner
        Scanner scanner = new Scanner(System.in);

        // Solicitar categoría a user
        System.out.println(
                "Escoga una categoría escribiendo el número correspondiente: Drama(1), Comedia(2), Romance(3), Suspenso(4) o Terror(5):\n");

        // Validar que el usuario ingrese un número antes de intentar leerlo
        if (!scanner.hasNextInt()) {
            System.out.println("Escriba una opción válida (solo números).\n");
            scanner.close();
            return; // Terminar ejecución
        }

        // Guardar la elección del user (ahora es seguro porque ya validamos que sea
        // número)
        int opcion = scanner.nextInt();

        // Estructura switch para procesar la opción del user
        switch (opcion) {
            case 1:
                System.out.println("Categoría Seleccionada: Drama");
                System.out.println("Te recomendamos ver: Forrest Gump");
                break;

            case 2:
                System.out.println("Categoría Seleccionada: Comedia");
                System.out.println("Te recomendamos ver: Son como niños");
                break;

            case 3:
                System.out.println("Categoría Seleccionada: Romance");
                System.out.println("Te recomendamos ver: Orgullo y Prejuicio");

                break;

            case 4:
                System.out.println("Categoría Seleccionada: Suspenso");
                System.out.println("Te recomendamos ver: La Isla Siniestra");
                break;

            case 5:
                System.out.println("Categoría Seleccionada: Terror");
                System.out.println("Te recomendamos ver: El Conjuro");
                break;

            default:
                System.out.println("Opción no válida.");
                break;
        }

        // Cerrar el recurso al terminar
        scanner.close();
    }
}
