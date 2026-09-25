/* 
Creación de clases de usuario
*/

// Crear clase usuario

export class Usuario {
    id; // Identificador único de usuario
    static total = 0; // Accesible a través de la clase
    nombre;
    correo;

    constructor(nombre, correo) {
        Usuario.total++;
        this.id = Usuario.total;
        this.nombre = nombre
        this.correo = correo
    }
}

