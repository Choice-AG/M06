//Quitar los espacios de un String y comprobar el email (Solo un @)
//QUITAR ESPACIOS
let frase = "La Tierra es plana";
let miFrase = frase.replaceAll(" ", "");
console.log(miFrase.toLowerCase());

// EMAIL VÁLIDO
let email = "goizane@gmail@escolesnuria.cat";
if(email.indexOf("@") == email.lastIndexOf("@")) {
    console.log("Es un email válido")
} else {
    console.log("No es un email válido")
}



/* let cont = 0;
for ($pos = 0 ; $pos < email.length ; $pos++) {
    if (email[$pos].includes("@") == true) {
        cont++
    }
}
console.log(cont)
if (cont == 1 ) {
    console.log("Es un email válido")
} else {
    console.log("No es un email válido")
} */