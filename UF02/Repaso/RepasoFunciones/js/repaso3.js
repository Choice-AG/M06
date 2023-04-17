//Parametros funciones
function mifuncion(nombre,edad){
    console.log(`Te llamas ${nombre} y tienes ${edad}`);
}
mifuncion("pepe","25");
//----------------------------------------------------------------------------------------------

//Parentesis autoejecutar código
(function mifuncion1(){
    console.log(`Hola que tal`);
})();
//----------------------------------------------------------------------------------------------

//Funcion en flecha
(() => {console.log("Hola")})();
//----------------------------------------------------------------------------------------------

//El "return" para aprovechar el valor para otra cosa en este caso contar numero caracteres string de si es par o no
function esPar(numero){
    let resultado;
    if (numero%2 == 0){
        resultado = "Es PAR";
    } else {
        resultado = "Es IMPAR";
    }
    return resultado; 
}
console.log(esPar(2) + " " + esPar(2).length);
//----------------------------------------------------------------------------------------------

//for(let color of Colores) = for(let i = 0 ; i < Colores.lenght ; i++)
let mostrar = document.querySelector(".mostrar")
const Colores = new Array("rojo","verde","amarillo","azul");
let codigo = "";
for(let color of Colores) {
    codigo += color + " ";
}
console.log(codigo);
mostrar.innerHTML = codigo;