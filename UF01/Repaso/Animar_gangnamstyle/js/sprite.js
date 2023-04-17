let visor = document.getElementById("visor");
let sprite = 225;
let numero = 0;


function fanimar() {
    /*
    if (numero < 22) {
        numero += 1;
    } else {
        numero = 0;
    }
    */
    numero +=1;
    visor.style.backgroundPosition=((numero*sprite)*-1)+"px";
    console.log((numero*sprite)*-1);
}

setInterval(fanimar,1000);