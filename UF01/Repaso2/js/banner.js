let ventana;
function fabrir(){
    ventana=window.open("https://escolesnuria.cat/ca/", "_black","wifth=600", "height=200");
    setTimeout(fcerrar, 5000);
}
function fcerrar(){
    ventana.close()
}
setTimeout(fabrir, 3000)
