let p1=document.querySelector("#p1")
let horas;
let minutos;
let segundos;
let milisegundos;
function fdarhora(){
    let ahora=new Date();
    horas=ahora.getHours();
    minutos=ahora.getMinutes();
    segundos=ahora.getSeconds();   
    milisegundos=Math.round(ahora.getMilliseconds()/10);
    if(horas<10){
        horas="0"+horas
    }
    if(minutos<10){
        minutos="0"+minutos
    }
    if(segundos<10){
        segundos="0"+segundos
    }
    if(milisegundos<10){
        milisegundos="0"+milisegundos
    }
    p1.innerHTML=horas+":"+minutos+":"+segundos+":"+milisegundos;
}

setInterval(fdarhora,1)