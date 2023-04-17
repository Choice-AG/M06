let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let bt4 = document.getElementById("bt4");

//eventos
bt1.addEventListener("mouseover", function() {
    document.body.style.backgroundColor=("rgb(0, 174, 255)");
})
bt1.addEventListener("mouseout", function() {
    document.body.style.backgroundColor=("white");
})

bt2.addEventListener("mouseover", function() {
    document.body.style.backgroundColor=("rgb(255, 208, 0)");
})

bt3.addEventListener("mouseover", function() {
    document.body.style.backgroundColor=("rgb(14, 173, 0)");
})

bt4.addEventListener("mouseover", function() {
    document.body.style.backgroundColor=("rgb(255, 0, 34)");
})