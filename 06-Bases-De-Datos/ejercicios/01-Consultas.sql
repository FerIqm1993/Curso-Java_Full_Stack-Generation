-- Ejercicio 1: Consultas Básicas
-- Instrucción: Escribe una consulta para obtener todos los usuarios mayores de 18 años.
SELECT * FROM Usuarios WHERE edad > 18;
-- Escribe otra para actualizar el nombre del usuario con id 1 a 'Juan'.
UPDATE Usuarios SET nombre = 'Juan' WHERE id = 1;
