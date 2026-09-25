function main() {
    /* ############## Instrucciones ##############
    El programa debe imprimir los números del 1 al 100.
    Una vez que tu programa hago esto hacer los siguientes puntos.
    Remplazar los números que sean múltiplos de 3 por la palabra Fizz.
    Remplazar los números que sean múltiplos de 5 por la palabra Buzz.
    Remplazar los números que sean múltiplos de 3 y 5 por la palabra FizzBuzz.
    */

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

main();

