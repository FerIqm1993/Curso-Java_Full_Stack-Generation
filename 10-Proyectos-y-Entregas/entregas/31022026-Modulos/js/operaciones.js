export function suma(n1, n2) {
    return n1 + n2;
}

export function resta(n1, n2) {
    return n1 - n2;
}

export function multiplicacion(n1, n2) {
    return n1 * n2;
}

export function cociente(n1, n2) {
    if (n2 === 0) return "Error";
    return n1 / n2;
}

export function residuo(n1, n2) {
    if (n2 === 0) return "Error";
    return n1 % n2;
}
