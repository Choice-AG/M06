const dias = ['lunes','martes','miercoles','jueves', 'viernes', 'sabado', 'domingo'];

// Recorrer arrays on bucle
largoDias = dias.length;

document.write(`<p>CON BUCLE</p>`);
for( let i = 0 ; i < largoDias ; i++) {
    document.write(`<p>${dias[i]}</p>`);
}

// ECMA6 -> for of (Para recorrer arrays)
document.write(`<p>CON FOR OF(PARECIDO AL FOREACH)</p>`);
for(let dia of dias) {
    document.write(`<p>${dia}</p>`);
}

// ForEach
document.write(`<p>FOREACH</p>`);
let codigo = "<table border='1'>";
dias.forEach(function(elemento, index, arreglo) {
    codigo += `<tr><td>${index}</td><td>${elemento}</td></tr>`;
})
codigo += "</table>";

document.write(codigo)

// Recorrer un objeto js (Para recorrer objetos y colecciones)
document.write(`<p>RECORRER OBJETO JS</p>`);
const Alumnos = {
    nombre: 'Perico', 
    apellido:'edad',
    edad: 22
}

for(let alumno in Alumnos) {
    console.log(Alumnos[alumno])
}