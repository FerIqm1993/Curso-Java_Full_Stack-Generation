import  java.util.Scanner;

class Normalizacion {

        // Simular usuario y contraseña de pruebas
        final static String USUARIO_PRUEBA = "admin";
        final static String CONTRASENA_PRUEBA = "admin123";

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        // Mensaje ingresar usuario
        System.out.print("Ingresa tu nombre de usuario: ");
        String usuario = sc.nextLine();

        // Mensaje ingresar contraseña
        System.out.print("Ingresa tu contraseña de usuario: ");
        String password = sc.nextLine();
        
        // Validar usuario y contraseña de usuario
        if (validarUsuario(usuario, password)){
            System.out.println("Usuario validado, acceso concedido.");
        } else {
            System.out.println("Error en user o contraseña.");
        }

        // Cerrar scanner
        sc.close();

    
    } // main

    // Método para normalizar usuario
    static  String normalizarUsuario(String usuario){

        // Eliminar espacios y pasar a minúsculas
        String usuarioNormalizado = usuario.trim().toLowerCase();

        return usuarioNormalizado;
    }

    // Método para validar usuario
    static boolean validarUsuario(String usuario, String password){
        
        // Normalizar usuario
        usuario = normalizarUsuario(usuario);

        // Validar si el usuario Y la contraseña coinciden
        if (usuario.equals(USUARIO_PRUEBA) && password.equals(CONTRASENA_PRUEBA)) {
            return true;
        } else {
            return false;
        }
    }
}


