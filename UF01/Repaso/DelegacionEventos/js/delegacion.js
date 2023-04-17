let miContenedor = document.getElementById("contenedor")

miContenedor.addEventListener("click", function(e) {
    //console.log(e.target.id); Sirve para ver toda la información
    if (e.target.id == "bt1") {
        this.style.backgroundColor = "blue";
    } else if (e.target.id == "bt2") {
        this.style.backgroundColor = "orange";
    }
})

/* let miboton1 = document.getElementById("bt1");

miboton1.addEventListener("click", function() {
    console.log("Has pulsado el botón 1");
})
let miboton2 = document.getElementById("bt2");

miboton1.addEventListener("click", function() {
    console.log("Has pulsado el botón 2");
})
let miboton3 = document.getElementById("bt3");

miboton1.addEventListener("click", function() {
    console.log("Has pulsado el botón 3");
})
let miboton4 = document.getElementById("bt4");

miboton1.addEventListener("click", function() {
    console.log("Has pulsado el botón 4");
})
let miboton5 = document.getElementById("bt5");

miboton1.addEventListener("click", function() {
    console.log("Has pulsado el botón 5");
}) */