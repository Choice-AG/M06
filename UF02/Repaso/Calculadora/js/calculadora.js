// Declaración de variables
let cuerpo = document.getElementById("cuerpo");
let pantalla = document.getElementById("pantalla");
let numero1;
let numero2;
let resultado;
let operador;
let puntoFound;
// Función para guardar el valor del numero 1
function fnumero1() {
    numero1 = parseFloat(pantalla.value);
    console.log("numero1: " + numero1)
    pantalla.value = "";
}
cuerpo.addEventListener("click", function(e){
    if (e.target.value >= 0 && e.target.value <= 9) {
        pantalla.value += e.target.value;
        puntoFound = true;
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
        if (!puntoFound) {
            pantalla.value += ".";
        }
        puntoFound = pantalla.value.includes(".")
    }
    // Raíz Cuadrada
    if (e.target.value == "√") {
        pantalla.value = Math.sqrt(pantalla.value).toFixed(2)
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
        console.log("numero2: " + numero2)
        switch(operador) {
            case "*":
                resultado = numero1 * numero2;
                break;
            case "/":
                resultado = numero1 / numero2;
                resultado = resultado.toFixed(2);
                break;
            case "+":
                resultado = numero1 + numero2;
                break;    
            case "-":
                resultado = numero1 - numero2;
                break;
        }
        console.log("Resultado: " + resultado);
        pantalla.value = resultado;
    }
})