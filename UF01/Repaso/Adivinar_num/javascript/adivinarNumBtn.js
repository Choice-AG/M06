function fnumAleatorio() {
    let numAleatorio = (Math.floor(Math.random()*100))+1;
    return numAleatorio;
}

function finiciarJuego() {
    //obtener aleatorio
    let numero = fnumAleatorio();
    console.log(numero);
    
    let numPropuesto;
    let intentos = 1;
    while (numPropuesto != numero) {
        numPropuesto = prompt("Introduce un número, tienes 10 intentos:");
        if (numero < numPropuesto && intentos <= 10) {
            console.log("El número a adivinar es menor.");
            console.log("Llevas " + intentos + " intentos.");
        } 
        else if (numero > numPropuesto) {
            console.log("El número a adivinar es mayor.");
            console.log("Llevas " + intentos + " intentos.");
        } 
        else {
            console.log("FELICIDADES!! Lo has conseguido en " + intentos + " intentos.");
            intentos = 10;
        }
        intentos++
    }
}

let info = document.getElementById("info");

//al hacer click enel boton, empieza el juego
let boton = document.getElementById("btnJugar");
boton.addEventListener("click", function() {
    finiciarJuego();
})