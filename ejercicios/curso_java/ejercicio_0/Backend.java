import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

/**
 * Backend de Java Nativo (Sin Frameworks) para simular el Ejercicio 14.
 * Este programa levanta un servidor web en tu propia computadora (localhost)
 * en el puerto 8080 y responde con datos en formato JSON simulando una API real.
 */
public class Backend {

    public static void main(String[] args) throws IOException {
        // 1. Crear el servidor: 
        // Inicializamos un servidor HTTP en el puerto 8081. El segundo parámetro (0) es la cola de espera por defecto.
        HttpServer server = HttpServer.create(new InetSocketAddress(8081), 0);

        // 2. Crear las rutas (Endpoints):
        // Cuando alguien navegue o haga un 'fetch' a "http://localhost:8081/api/productos",
        // se ejecutará la clase ProductosHandler.
        server.createContext("/api/productos", new ProductosHandler());
        
        // Cuando alguien haga un 'fetch' a "http://localhost:8081/api/usuarios",
        // se ejecutará la clase UsuariosHandler.
        server.createContext("/api/usuarios", new UsuariosHandler());

        // 3. Configuración adicional y arranque:
        server.setExecutor(null); // Crea un ejecutor por defecto
        server.start(); // Encendemos el servidor
        
        System.out.println("✅ Servidor Backend corriendo en: http://localhost:8081");
        System.out.println("👉 Prueba entrando a http://localhost:8081/api/productos en tu navegador.");
        System.out.println("Presiona Ctrl+C en la terminal para apagarlo.");
    }

    /**
     * Manejador para la ruta de Productos.
     * Implementa HttpHandler, que obliga a crear un método "handle" que se dispara cuando hay una petición.
     */
    static class ProductosHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // 1. Configurar CORS (Intercambio de Recursos de Origen Cruzado)
            // Esto es vital: le dice al navegador que permita a nuestro frontend (index.html) 
            // consumir estos datos aunque no estén en la misma carpeta exacta.
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Content-Type", "application/json; charset=UTF-8");

            // Si es una petición de tipo "OPTIONS" (el navegador preguntando si puede acceder), le decimos que sí.
            if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, OPTIONS");
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            // 2. Preparar la respuesta (JSON)
            // En la vida real, sacaríamos esto de una Base de Datos usando SQL.
            // Aquí lo escribimos "a mano" (Hardcoded) como un arreglo de JSON de texto.
            String jsonResponse = "[" +
                "{\"title\": \"Mancuernas 10kg\", \"price\": 450.00, \"image\": \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\"}," +
                "{\"title\": \"Mochila de Senderismo\", \"price\": 899.99, \"image\": \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\"}," +
                "{\"title\": \"Tenis Running\", \"price\": 1200.50, \"image\": \"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg\"}" +
            "]";

            // 3. Enviar la respuesta
            byte[] bytes = jsonResponse.getBytes("UTF-8");
            exchange.sendResponseHeaders(200, bytes.length); // 200 significa "OK"
            
            OutputStream os = exchange.getResponseBody();
            os.write(bytes); // Mandamos los datos
            os.close(); // Cerramos la conexión
        }
    }

    /**
     * Manejador para la ruta de Usuarios (Equivalente a DummyJSON).
     */
    static class UsuariosHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().add("Content-Type", "application/json; charset=UTF-8");

            if (exchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, OPTIONS");
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            // Estructura similar a la de DummyJSON (un objeto que contiene un arreglo 'users')
            String jsonResponse = "{" +
                "\"users\": [" +
                    "{\"firstName\": \"Carlos\", \"lastName\": \"Slim\", \"username\": \"carlos_s\", \"email\": \"carlos@empresa.com\", \"image\": \"https://dummyjson.com/icon/carlos_s/128\"}," +
                    "{\"firstName\": \"Ana\", \"lastName\": \"García\", \"username\": \"anita_g\", \"email\": \"ana@empresa.com\", \"image\": \"https://dummyjson.com/icon/anita_g/128\"}" +
                "]" +
            "}";

            byte[] bytes = jsonResponse.getBytes("UTF-8");
            exchange.sendResponseHeaders(200, bytes.length);
            
            OutputStream os = exchange.getResponseBody();
            os.write(bytes);
            os.close();
        }
    }
}
