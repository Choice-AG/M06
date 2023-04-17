let parrafo=document.getElementById("p1");
let texto=1;

function fcambiarColor() {
    parrafo.style.color="orange";
}

setTimeout(fcambiarColor, 2000); //cambia el color a los 2 segundos.

function fescribir() {
    texto+=1;
    parrafo.innerHTML=texto;
}

setInterval(fescribir, 1000);