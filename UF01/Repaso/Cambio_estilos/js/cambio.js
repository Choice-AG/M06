//Selectores, hacen lo mismo
let btngrande = document.getElementById("btngrande"); //antigua forma
let btnpeque = document.querySelector("#btnpeque"); //nueva forma
let styles = document.getElementById("estilos");

//agregar evento
btngrande.addEventListener("click", function() { //funcion anónima
    styles.href="./css/grande.css";
})

btnpeque.addEventListener("click", function() { //funcion anónima
    styles.href="./css/pequeño.css";
})
