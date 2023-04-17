/*
 * Dividir el DNI entre 23, el rest obtenido (0,22) obtiene la letra
 * del array cadena
*/
let imagen = document.getElementById("imagen");
let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    fcomprobar();
})

function fcomprobar() {
    letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

    let dni = document.getElementById("cajadni").value;
    let resto = dni % 23;
    let letranif = letras[resto];
    let letraNifUsuario = (document.getElementById("cajanif").value).toUpperCase();
    if (letranif == letraNifUsuario) {
        //cambiar la imagen dnivalido.png
        imagen.src = "img/dnivalido.png";
        console.log("CORRECTO");
    } else {
        //cambiar la imagen dniinvalido.png
        imagen.src = "img/dniinvalido.png";
        console.log("CORRECTO");
    }
}