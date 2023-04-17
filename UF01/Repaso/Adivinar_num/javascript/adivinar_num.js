function fnumAleatorio() {
    let numAleatorio = (Math.floor(Math.random()*100))+1;
    return numAleatorio;
}

function finiciarJuego() {
    let numero = fnumAleatorio();
    console.log(numero);
    
    let numPropuesto;
    for (let intentos = 1 ; intentos <= 10 ; intentos++) {
        if (intentos <= 10) {
            numPropuesto = prompt("Introduce un número, tienes 10 intentos:");
            if (numero < numPropuesto) {
                console.log("El número a adivinar es menor.");
                console.log("Llevas " + intentos + " intentos.");
            } else if (numero > numPropuesto) {
                console.log("El número a adivinar es mayor.");
                console.log("Llevas " + intentos + " intentos.");
            } else {
                console.log("FELICIDADES!! Lo has conseguido en " + intentos + " intentos.");
            }
        } else {
            console.log("Has agotado los intentos :(");
        }
    }
}

finiciarJuego();