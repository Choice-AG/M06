/* -----------------------BUCLES----------------------- */
//BUCLE FOR
/* let boton = document.getElementById("boton");
boton.addEventListener("click",flistar);

function flistar() {
    document.write("<h2>Bucles</h2>");
    let ultimo = prompt("Introduce el número a listar")
    for(i = 0 ; i <= ultimo ; i++) {
        document.write("<p>" + i + "</p>");
    }
}

flistar(); */

//----------------------------------------------------------
//NUMEROS IMPARES INFERIORES A 100

function numImpar() {
    for (let i = 0 ; i <= 100 ; i++) {
        if (i % 2 == 1) {
            document.write("<p>" + i + "</p>")
        } 
    }
}

numImpar();
