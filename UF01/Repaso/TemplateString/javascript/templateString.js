//Template string
let nombre = "Perico";
let email = "ppalotes@gmail.com";
let edad = 25;
let boton = document.getElementById("boton");
let info = document.getElementById("info");

boton.addEventListener("click", function() {
    //innerHTML
    info.innerHTML = "<img id='imagen' src='img/homer.png' alt='dado'><br><button id='boton2'>boton2</button>";

    let imagen = document.getElementById("imagen");
    let boton2 = document.getElementById("boton2");
})

boton2.addEventListener("click", function() {
    imagen.src = "img/homer2.png";
})

//Template String: Se pone el texto entre `` y la variable se mete de la siguiente manera: ${variable}
//console.log(`Mi nombre es ${nombre} , mi email es ${email} y tengo ${edad} años`);