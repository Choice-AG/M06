let parrafos = document.getElementsByTagName("p");
let img = document.getElementsByTagName("img");
let pares = document.getElementsByClassName("par");

for(let i = 0; i < parrafos.length ; i++) {
    parrafos[i].style.color="red";
}

for (let k = 0 ; k < img.length ; k++) {
    img[k].style.width="200px";
}

for (let h = 0 ; h < pares.length ; h++) {
    pares[h].style.fontSize="50px";
}
