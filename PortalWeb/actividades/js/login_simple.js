let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //De esta manera evitamos que el submit ha su función predefinida

  const username = form.elements.username.value;
  const password = form.elements.password.value;
  console.log(username + password);

  if (username === "daw" && password === "daw") {
    window.location.href = "menu.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
