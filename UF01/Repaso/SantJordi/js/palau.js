let miMapa = document.getElementById("imagenMap");
let cajaEntradas = document.getElementById("cajaEntradas");
let cajaZona = document.getElementById("cajaZona");
let cajaPrecio = document.getElementById("cajaPrecio");
let cajaPagar = document.getElementById("cajaPagar");

let imagen = document.getElementById("imagen");
let capa1 = document.getElementById("capa1");
const precios = [150, 90, 120, 80];

document.getElementById("imagenMap").addEventListener("mouseover", function(e) {
    let zona = e.target.alt;
    switch (zona) {
        case "zona1":
            imagen.src = "img/zona1.png";
            capa1.innerHTML = "Zona 1 150€";
            break;
        case "zona2":
            imagen.src = "img/zona2.png";
            capa1.innerHTML = "Zona 2 90€";
            break; 
        case "zona3":
            imagen.src = "img/zona3.png";
            capa1.innerHTML = "Zona 3 120€";
            break;   
        case "zona4":
            imagen.src = "img/zona4.png";
            capa1.innerHTML = "Zona 4 80€";
            break;        
        default:
            alert("Algo no ha ido bien");
            break;
    }
    cajaPagar.value = cajaEntradas.value * cajaPrecio.value + " €";
})

miMapa.addEventListener("click", function(e) {
    let zona = e.target.alt;
    switch (zona) {
        case "zona1":
            cajaZona.value = "Zona 1";
            cajaPrecio.value = precios[0];
            break;
        case "zona2":
            cajaZona.value = "Zona 2";
            cajaPrecio.value = precios[1];
            break; 
        case "zona3":
            cajaZona.value = "Zona 3";
            cajaPrecio.value = precios[2];
            break;   
        case "zona4":
            cajaZona.value = "Zona 4";
            cajaPrecio.value = precios[3];
            break;        
        default:
            alert("Algo no ha ido bien");
            break;
    }
    cajaPagar.value = cajaEntradas.value * cajaPrecio.value + " €";
})

function fcalcular() {
    cajaPagar.value = cajaEntradas.value * cajaPrecio.value + " €";
}

cajaEntradas.addEventListener("change", function() {
    fcalcular();
})