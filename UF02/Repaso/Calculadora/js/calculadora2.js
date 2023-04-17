// Declaración de variables
let cuerpo = document.getElementById("cuerpo");
let pantalla = document.getElementById("pantalla");
let numero1;
let numero2;
let resultado;
let operador;
let puntoFound;
let contCeros = 0;
let inicio;
// Función para guardar el valor del numero 1
function fnumero1() {
    numero1 = parseFloat(pantalla.value);
    console.log("Numero1: " + numero1);
    pantalla.value = "";
}
cuerpo.addEventListener("click", function(e){
    if (e.target.value >= 0 && e.target.value <= 9) {
        pantalla.value += e.target.value;
    }
    // Multiplicación
    if (e.target.value == "*") {
        operador = "*";
        fnumero1();
    }
    // División
    if (e.target.value == "/") {
        operador = "/";
        fnumero1();
    }
    // Resta
    if (e.target.value == "-") {
        operador = "-";
        fnumero1();
    }
    // Suma
    if (e.target.value == "+") {
        operador = "+";
        fnumero1();
    }
    // Borrar todo el número
    if (e.target.value == "C") {
        pantalla.value = "";
    }
    // Borrar último número
    if (e.target.value == "←") {
        pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1)
    }
    // Añadir comas
    if (e.target.value == ".") {
        if (pantalla.value.includes(".") == false) {
            pantalla.value += ".";
        }
    }
    // Raíz Cuadrada
    if (e.target.value == "√") {
        pantalla.value = Math.sqrt(pantalla.value).toFixed(2);
    }
    // Cambio de signo
    if (e.target.value == "±") {
        console.log(e.target.value)
        if (pantalla.value > 0) {
            pantalla.value = "-" + pantalla.value;
        } else {
            pantalla.value = pantalla.value.substring(1, pantalla.value.length)
        }
    }
    // Resultado
    if (e.target.value == "=") {
        numero2 = parseFloat(pantalla.value);
        console.log("Numero2: " + numero2)
        switch(operador) {
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                resultado = numero1 / numero2;
                break;
            case "+":
                resultado = numero1 + numero2;
                break;    
            case "-":
                resultado = numero1 - numero2;
                break;
        }
        for (let i = 0 ; i < resultado.length ; i++) {
            if (resultado[i] == ".") {
                inicio = i;
            }
        }
        for (let i = inicio ; i < resultado.length ; i++) {
            if (resultado[i] == 0) {
                contCeros++;
            }
        }
        if ((resultado - parseInt(resultado)) == 0) { // Si tiene 0 como decimales solo sale el entero
            resultado = resultado.toFixed(0);
            pantalla.value = resultado;
        } else {
            resultado = resultado.toFixed(2);
            if (resultado[resultado.length] == 0) {
                pantalla.value = resultado.substring(0, resultado.length - 1);
            } else {
                pantalla.value = resultado;
            }
        }
        console.log("a " + resultado[resultado.length]);
        console.log("Resultado: " + resultado);
    }
})