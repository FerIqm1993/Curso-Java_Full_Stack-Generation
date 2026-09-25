function suma(a, b) {
    return a + b;
} // suma

function validarEmail(email) {
    const regex = new RegExp(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/);
    
    if (!regex.test(email)) {
        return false;
    }// if

    return true;
} // validarEmail

module.exports = { suma, validarEmail };
