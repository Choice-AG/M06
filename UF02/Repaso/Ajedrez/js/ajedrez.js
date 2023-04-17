let mostrar = document.getElementById("mostrar");
let codigo = "";

function rellenarTablero(){
    for(let fila = 0 ; fila < 8 ; fila++) {
        for (let col = 0 ; col < 8 ; col++) {
            if (eval(fila+col)%2 == 0){
                codigo += `<div class='blanco'></div>`;
            } else {
                codigo += `<div class='negro'></div>`;
            }
        }
        console.log(codigo)
    }
mostrar.innerHTML = codigo;
}
rellenarTablero()