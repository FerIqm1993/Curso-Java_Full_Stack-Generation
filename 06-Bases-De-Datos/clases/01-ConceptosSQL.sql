-- Clase 1: Conceptos Básicos de SQL
-- CREATE TABLE permite crear una nueva tabla
CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT
);
-- INSERT INTO permite agregar registros
INSERT INTO Usuarios (id, nombre, edad) VALUES (1, 'Carlos', 28);
