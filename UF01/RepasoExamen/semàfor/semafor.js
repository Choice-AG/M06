//aquí va el código del semáforo
let semaforo_verde = document.getElementById("verde");
let semaforo_rojo = document.getElementById("rojo");
let semaforo_ambar = document.getElementById("ambar");
/*
semaforo_verde.style.visibility="visible";
semaforo_rojo.style.visibility="visible";
semaforo_ambar.style.visibility="visible";
*/

function VisibleVerde(){
    semaforo_verde.style.visibility="visible";
    semaforo_rojo.style.visibility="hidden";
    semaforo_ambar.style.visibility="hidden";
    setTimeout(VisibleAmbar, 8000);
}

function VisibleAmbar(){
    semaforo_verde.style.visibility="hidden";
    semaforo_rojo.style.visibility="hidden";
    semaforo_ambar.style.visibility="visible";
    setTimeout(VisibleRojo, 3000);
}

function VisibleRojo(){
    semaforo_verde.style.visibility="hidden";
    semaforo_ambar.style.visibility="hidden";
    semaforo_rojo.style.visibility="visible";
    setTimeout(VisibleVerde,7000);
}

VisibleVerde();