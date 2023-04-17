//Hacer que una funcion sea auto-ejecutable
//Se ejecuta al cargar la pagina

(function () {
    console.log("Hola que tal");
})();

//Funcion auto-ejecutable con parametros
//Se ejecuta al cargar la pagina

(function (nombre, edad) {
    console.log(
        "Hola que tal " + nombre + " tienes " + edad + " años"
    );
})("Pepe", 23);


//Sobrecargar una funcion: Una funcion que se comporta de manera distinta en funcion de sus argumentos

let alumnos = {
    nombre: "Alvaro",
    edad: 24,

    calcularMedia:function(){
        switch (arguments.length) {
            case 0:
                console.log("No has pasado parámero.")
                break;
            case 1:
                console.log("La media es: " + arguments[0]);
                break;
            case 2:
                console.log("La media es: " + (arguments[0] + arguments[1]) / 2);
                break;
            case 3:
                console.log("La media es: " + (arguments[0] + arguments[1] + arguments[2]) / 3);
                break;
            default:
                console.log("No se como calcular la media de mas de 3 numeros");
                break;
        }
    }
}

alumnos.calcularMedia(5);
alumnos.calcularMedia(5, 6);
alumnos.calcularMedia(5, 6, 7);
alumnos.calcularMedia(5, 6, 7, 8);

//function overload
function suma() {
    var resultado = 0;
    for (var i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }
    return resultado;
}

//Sobrecarga de funciones con spread operator
function suma(...numeros) {
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    return resultado;
}

const resultado1 = suma(1,3,5,6,2,2,3,5,6,3,2,12);
console.log(resultado1);
const resultado2 = suma(5,25);
console.log(resultado2);