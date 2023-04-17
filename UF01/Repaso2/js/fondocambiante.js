//dividir la pantalla en 4 trozos iguales y cambiar el fondo de la pagina
let ancho=window.innerWidth;
let alto=window.innerHeight;
let x;
let y;
//document.body.style.backgroundColor="blue";
window.addEventListener("mousemove",function(event){
    console.log("hola")
    x=event.clientX;//posicionX del mouse
    y=event.clientY;//posicionY del mouse
    if(x<ancho/2 && y<alto/2){
        document.body.style.backgroundColor="red";
    }else if(x<ancho && y<alto/2){
        document.body.style.backgroundColor="yellow";
    }else if(x<ancho/2 && y<alto){
        document.body.style.backgroundColor="blue";
    }else{
        document.body.style.backgroundColor="green";
    }
})
