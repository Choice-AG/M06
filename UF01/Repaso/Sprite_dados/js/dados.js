//declarar variables
let boton=document.getElementById("btnLanzar");
let visor = document.getElementById("visor");
let numero;

//funcion que me devuelva un numero de dado
function fdado() {
    numero = parseInt(((Math.random())*6)+1);
    return numero; //1,2,3,4,5,6
}

boton.addEventListener("click", function() {
    visor.style.backgroundImage = "url('img/dadodaw.gif')";
    setTimeout(fponerDado, 3000);
})

function fponerDado(){
    let valor = fdado()*(-313)+"px";
    visor.style.backgroundImage = "url('img/dadossprite.png')";
    visor.style.backgroundPosition = valor;
}
