let colocarimg = document.querySelector("#colocarimg");
let caja=document.querySelector("#caja");
let regexp = /^[1-5]$/;
caja.addEventListener("keydown",(e)=>{
    if(regexp.test(e.key)){
        colocarimg.src="img/"+e.key+".jpg";
    }else{
        colocarimg.src="img/0.jpg";
    }
});