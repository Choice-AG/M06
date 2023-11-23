let contenedor=document.querySelector("#contenedor");
let cajatexto=document.querySelector("#cajatexto");
cajatexto.addEventListener("keydown",(e)=>{
    contenedor.style.backgroundColor="red";
})
cajatexto.addEventListener("keypress",(e)=>{
    contenedor.style.backgroundColor="green";
})
cajatexto.addEventListener("keyup",(e)=>{
    contenedor.style.backgroundColor="yellow";
})