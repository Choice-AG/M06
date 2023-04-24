const imagenes = [
  "numeros/imagen0.gif",
  "numeros/imagen1.gif",
  "numeros/imagen2.gif",
  "numeros/imagen3.gif",
  "numeros/imagen4.gif",
  "numeros/imagen5.gif",
  "numeros/imagen6.gif",
  "numeros/imagen7.gif",
  "numeros/imagen8.gif",
  "numeros/imagen9.gif",
];

//mostrar 3 imagenes aleatorias sin que se repitan las imagenes al cargarse la pagina
function imgAleatorias() {
  const imgSeleccionadas = [];
  while (imgSeleccionadas.length < 3) {
    const aleatorio = Math.floor(Math.random() * imagenes.length); //Número del 0-9
    if (!imgSeleccionadas.includes(imagenes[aleatorio])) {
      imgSeleccionadas.push(imagenes[aleatorio]); //Si no existe lo mete en el array
    }
  }
  return imgSeleccionadas;
}

//-------------------------------------------
const imgSeleccionadas = imgAleatorias(); //Array con eel n de imágenes añadidas
for (let i = 0; i < imgSeleccionadas.length; i++) {
  const img = document.createElement("img");
  img.src = "img/" + imgSeleccionadas[i];
  document.body.appendChild(img);
}