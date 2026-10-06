import java.util.*;

class Colecciones {
    /* List, Set, Map, ArrayList, HashMap */

    public static void main(String[] args) {

        // Instanciar array
        ArrayList<Integer> numerosPares = new ArrayList<>();

        // Mostrar arreglo en consola
        System.out.println(numerosPares);

        // Agregar elementos
        numerosPares.add(2);
        numerosPares.add(4);
        numerosPares.add(6);
        numerosPares.add(8);
        numerosPares.add(13); // Impar
        numerosPares.add(10);

        // Mostrar arreglo en consola con elementos
        System.out.println(numerosPares);

        // Eliminar elemento del arreglo
        numerosPares.remove((Integer) 4); // En posición 4

        // Mostrar tamaño del arreglo
        System.out.println("Total de elementos en el arrego: " + numerosPares.size());

        // Uso del método .get
        int pos = 2;
        System.out.println("El elemento en la posición " + pos + " es: " + numerosPares.get(2));

        // for tradicional
        for (int i = 0; i < numerosPares.size(); i++) {
            System.out.println("For tradicional: " + numerosPares.get(i));
        }

        System.out.println("\n--- HashSet ---");
        HashSet<String> marcas = new HashSet<>();

        // .add() -> agregar nuevos elementos
        marcas.add("Xiaomi");
        marcas.add("LG");
        marcas.add("Sony");
        marcas.add("Apple");
        marcas.add("Google");
        marcas.add("Sony"); // No da error, pero lo ignora

        // .remove() -> Elimina el elemento indicado
        marcas.remove("LG");

        if( marcas.contains("Apple") ){
            System.out.println("Si existe");
        } else {
            System.out.println("No existe");
        }// else

        System.out.println(marcas);

        for(String marca: marcas){
            System.out.println(marca.toUpperCase());
        }// forEach

    }
}
