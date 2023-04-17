//VARIABLES
let boton = document.getElementById("btPuntos")
let mostrar = document.getElementById("mostrar")
const ranking = new Array(1,3,2);

//CODE
boton.addEventListener("click", function() {
    let rankingOrdenado = ranking.sort(function (a, b){return a - b}); //Esta es la forma de ordenar un array numérico
    let puntuacion = Math.round(Math.random()*100)
    if (puntuacion > rankingOrdenado[0]) {
        rankingOrdenado[0] = puntuacion;
    }
    let rankingFinal = rankingOrdenado.sort(function(a, b){return a-b});
    mostrar.innerHTML = `<h1>1º: ${rankingFinal[2]}</h1>
                         <h1>2º: ${rankingFinal[1]}</h1>
                         <h1>3º: ${rankingFinal[0]}</h1>`;
})
