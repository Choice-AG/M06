//DELEGACION DE EVENTOS

const caja = document.getElementById("caja");
caja.addEventListener("click", (e) => {
  //console.log(e.target.value);
  let identificador = e.target.id;
  switch (identificador) {
    case "boton1":
      console.log("boton1");
      break;
    case "boton2":
      console.log("boton2");
      break;
    case "boton3":
      console.log("boton3");
      break;
    default:
      console.log("no hay boton");
  }
});