let num1 = 5; // Ahora vive en el scope global y todos pueden verla

function sumar() {
    let num2 = 10;
    console.log("suma " + (num1 + num2));
}

console.log(num1); // Esto ya no daría error e imprimiría 5
sumar();
