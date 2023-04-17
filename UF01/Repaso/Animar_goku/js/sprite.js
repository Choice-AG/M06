let visor = document.getElementById("visor");
let sprite = 100;
let numero = 0;

function fanimar() {
    numero +=1;
    visor.style.backgroundPosition=((numero*sprite)*-1)+"px";
    console.log((numero*sprite)*-1);
}

setInterval(fanimar,100);