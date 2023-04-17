let num = 1;
function fescribir() {
    //document.write("<p>" + num + "</p>");
    alert("Hola han pasado 5 segundos.")
    console.log(num);
    num+=1
;}

//Para ejecutarse continuamente se utiliza -> setInterval (nombreFuncion, milisegundos);
//setInterval(fescribir,1000);
//No llama a la funcion hasta que pasen X milisegundos.
setTimeout(fescribir,1000);

//PARA PARARLO
//let interval = setTimeout(fescribir,5000);
//interval = clearInterval();



//Semaforo que cambia de verde(8segs) a ambar(5segs) y a rojo.
//Que se quede en ambar (amarillo, apagado) cada 2 segundos.
