//Expresiones regulares
const expresiones = {
  caja1: /^[a-zA-Z]{5,10}$/,
  caja2: /^[0-9]{5}$/,
}
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let valorPorcentaje = document.getElementById("valorPorcentaje");
let progress = document.getElementById("progress");

//funcion validar el formulario
const validarForm = (e)=>{
  console.log(e.target.name)
  switch (e.target.name) {
    case "caja1":
      if (expresiones.caja1.test(e.target.value)) {
        console.log("Correcto")
      } else {
        console.log("Incorrecto")
      }
      break;
    case "caja2":
        
      break;
    default:
      break;
  }
}

inputs.forEach((input)=>{
  input.addEventListener("keyup", validarForm)
})

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
})