var colores=["red","blue", "darkgreen", "salmon","violet"];
var dias = new Array("lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo");
var parrafo = document.getElementsByTagName("p");

for (let i = 0 ; i < parrafo.length ; i++) {
    parrafo[i].style.fontSize="30px";
    parrafo[i].style.color=(colores[i]);
}

let random = Math.floor(Math.random() * 10);

console.log(random)