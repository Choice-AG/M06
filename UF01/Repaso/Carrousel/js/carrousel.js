let visor = document.getElementById("visor");
let img = document.getElementById("img");

function faleat() {
    let numero = parseInt((Math.random()*100)+1);
    return numero; //1,2,3,4,5,6...100+
}

function fcambiar() {
    img.src="https://picsum.photos/300/300?random=" + faleat();
}

setInterval(fcambiar, 2000);
