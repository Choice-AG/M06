let cajapass = document.querySelector("#cajapass");
let cajallenar ="";
cajapass.addEventListener("keydown", (e) => {
    
    if(e.key != "Backspace" && e.key != "Shift" && e.key != "Alt" && e.key != "Control" && e.key != "Tab"){
        cajallenar += e.key;
    }else if(e.key == "Backspace"){
        cajallenar = cajallenar.substring(0, cajallenar.length - 1);
    }
    
});
cajapass.addEventListener("blur", () => {
    console.log(cajallenar);
});