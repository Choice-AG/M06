//---------------------------------
var a = [0, 1, 2, 3];
var b = [4, 5, 6];
var c = a.concat(b); // Para unir los arrays
console.log(c);

//---------------------------------
var a = [11, 3, 2, 1];
let ordenado = a.sort(function(a, b){return a-b}); // Para ordenar
console.log(ordenado);

//---------------------------------
a.shift() // Elimina el primer elemento
console.log(a)

//---------------------------------
function fsaludar(nombre, email){
    console.log("Hola " + nombre + ". Tu email es: " + email); // Imprimirlo normal
    console.log(`Hola ${nombre}. Tu email es: ${email}`); // Con template string
}

fsaludar("Goizane", "goizane@gmail.com")

//---------------------------------
let saludar2 = (nombre) =>{ //funcion flecha para codigo de una línea
    console.log(`Hola ${nombre} desde la funcion 2`)
}

saludar2("Goizane")

//---------------------------------
function pares() {
    let cadena = "";
    for (let i = 1 ; i <= 50 ; i++) {
        if (i % 2 === 0) {
            cadena += i + " ";
            console.log(`${i} es par`)
        }
    }
    console.log(cadena);
}

pares();


//---------------------------------
let num1 = 1
let num2 = "1"

if (num1 === num2) {
    console.log("Son iguales")
} else {
    console.log("NO son iguales")
}

//---------------------------------
function esPar(numero) {
    if (numero % 2 == 0) {
        return numero + " es par";
    }
}

console.log(esPar(5))