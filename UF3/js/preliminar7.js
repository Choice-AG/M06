let caja = document.getElementById("caja");
let f1 = document.getElementById("f1");
let valorPorcentaje = document.getElementById("valorPorcentaje");
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");
let caja5 = document.getElementById("caja5");
let send = document.getElementById("send");
let progress = document.getElementById("progress");

progress.value = 0;
send.disabled = true;

send.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Formulario enviado");
});

f1.addEventListener("change", (e) => {
  console.log(e.target.id);
  console.log(e.target.value);
  switch (e.target.id) {
    case "caja1":
      progress.value += 20;
      caja1.style.backgroundColor = "lightblue";  
      caja1.disabled = true;
      break;
    case "caja2":
      progress.value += 20;
      caja2.style.backgroundColor = "lightblue";
      caja2.disabled = true;
      break;
    case "caja3":
      progress.value += 20;
      caja3.style.backgroundColor = "lightblue";
      caja3.disabled = true;
      break;
    case "caja4":
      progress.value += 20;
      caja4.style.backgroundColor = "lightblue";
      caja4.disabled = true;
      break;
    case "caja5":
      progress.value += 20;
      caja5.style.backgroundColor = "lightblue";
      caja5.disabled = true;
      break;
  }
  valorPorcentaje.innerHTML = progress.value + "%";

  if (progress.value == 100) {
    send.disabled = false;
  }

});