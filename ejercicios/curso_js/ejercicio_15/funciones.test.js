// Importamos nuestras funciones
const { suma, validarEmail } = require('./funciones.js');

describe('Pruebas unitarias para la función suma()', () => {
    
    test('Debe sumar 0 + 0 y retornar 0', () => {
        expect(suma(0, 0)).toBe(0);
    });

    test('Debe sumar dos números positivos correctamente (5 + 3 = 8)', () => {
        expect(suma(5, 3)).toBe(8);
    });

    test('Debe manejar números negativos correctamente (-2 + 5 = 3)', () => {
        expect(suma(-2, 5)).toBe(3);
    });

    test('Debe sumar números decimales (1.5 + 2.5 = 4)', () => {
        expect(suma(1.5, 2.5)).toBe(4);
    });

});

describe('Pruebas unitarias para la función validarEmail()', () => {
    
    test('Debe retornar true para un correo válido estándar', () => {
        expect(validarEmail('usuario@dominio.com')).toBe(true);
    });

    test('Debe retornar true para correos con subdominios', () => {
        expect(validarEmail('usuario@mail.dominio.com')).toBe(true);
    });

    test('Debe retornar false si no tiene el símbolo "@"', () => {
        expect(validarEmail('usuariodominio.com')).toBe(false);
    });

    test('Debe retornar false si no tiene dominio después del "@"', () => {
        expect(validarEmail('usuario@')).toBe(false);
    });

    test('Debe retornar false si no tiene extensión de dominio (ej. .com)', () => {
        expect(validarEmail('usuario@dominio')).toBe(false);
    });

    test('Debe retornar false si contiene espacios en blanco', () => {
        expect(validarEmail('usu ario@dominio.com')).toBe(false);
    });

});
