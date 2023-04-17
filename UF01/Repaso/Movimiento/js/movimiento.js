//la propiedad css es left
let pelota = document.getElementById("pelota");
let pos = 0;
let anchoPantalla;

function fmover() {
    anchoPantalla = window.innerWidth; //obtener ancho de la pantalla
    if (pos < anchoPantalla - 100) {
        pos+=1;
    } else {
        pos = 0;
    }
    pelota.style.left=pos+"px";
}

setInterval(fmover, 1);