let entradas = prompt("Dime cuantas entadas quieres: ");
let precioEntrada = 18;
let precioFinal = entradas * precioEntrada;


if (entradas < 3) {
    let descuento = 0;
    let descuentoFinal = entradas * descuento / 100;
    let precioDescuento = precioFinal - descuentoFinal;
    alert("Has pedido " + entradas + " entradas, el precio de ellas es " + precioFinal + "€ (" + entradas + "*" + precioEntrada + "€), se te aplica un descuento del " + descuento + "% es decir " + descuentoFinal + "€ y deberás abonar un total de " + precioDescuento + "€");
} else if (entradas => 3 && entradas < 6) {
    let descuento = 2;
    let descuentoFinal = entradas * descuento / 100;
    let precioDescuento = precioFinal - descuentoFinal;
    alert("Has pedido " + entradas + " entradas, el precio de ellas es " + precioFinal + "€ (" + entradas + "*" + precioEntrada + "€), se te aplica un descuento del " + descuento + "% es decir " + descuentoFinal + "€ y deberás abonar un total de " + precioDescuento + "€");
} else if (entradas => 6 && entradas < 10) {
    let descuento = 4;
    let descuentoFinal = entradas * descuento / 100;
    let precioDescuento = precioFinal - descuentoFinal;
    alert("Has pedido " + entradas + " entradas, el precio de ellas es " + precioFinal + "€ (" + entradas + "*" + precioEntrada + "€), se te aplica un descuento del " + descuento + "% es decir " + descuentoFinal + "€ y deberás abonar un total de " + precioDescuento + "€");
} else if (entradas => 10 && entradas < 15) {
    let descuento = 5;
    let descuentoFinal = entradas * descuento / 100;
    let precioDescuento = precioFinal - descuentoFinal;
    alert("Has pedido " + entradas + " entradas, el precio de ellas es " + precioFinal + "€ (" + entradas + "*" + precioEntrada + "€), se te aplica un descuento del " + descuento + "% es decir " + descuentoFinal + "€ y deberás abonar un total de " + precioDescuento + "€");
} else {
    let descuento = 10;
    let descuentoFinal = entradas * descuento / 100;
    let precioDescuento = precioFinal - descuentoFinal;
    alert("Has pedido " + entradas + " entradas, el precio de ellas es " + precioFinal + "€ (" + entradas + "*" + precioEntrada + "€), se te aplica un descuento del " + descuento + "% es decir " + descuentoFinal + "€ y deberás abonar un total de " + precioDescuento + "€");
}
