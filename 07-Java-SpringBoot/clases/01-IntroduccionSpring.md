# Clase 1: Introducción a Spring Boot

Spring Boot facilita la creación de aplicaciones Java standalone basadas en Spring.

## Conceptos Clave
1. **Inyección de Dependencias (DI)**
2. **Inversión de Control (IoC)**
3. **Anotaciones** (@RestController, @GetMapping, @Service)

Ejemplo básico:
```java
@RestController
public class HolaController {
    @GetMapping("/")
    public String hola() { return "Hola Spring!"; }
}
```
