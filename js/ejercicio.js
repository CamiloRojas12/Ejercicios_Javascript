"Use strict"
/* Ej-1 */
console.log("Hola Mundo!¡")
/* Ej-2 */
let nombreAprendiz = "Camilo Rojas"
console.log ("Bienvenido Señor " + nombreAprendiz)
/* Ej-3 */
let costoProducto = 12000;
let impuestoProducto = 0.10;
let domicilioProducto = 2000;
let subTotal = costoProducto + (costoProducto * impuestoProducto);
let costoTotal = subTotal + domicilioProducto; 
console.log ("El valor del producto es de $ " + costoProducto); 
console.log ("El subtotal con impuesto es de $ " + subTotal);
console.log ("Costo por domicilio "+ domicilioProducto); 
console.log ("El costo total sera de $ " + costoTotal);
/* EJ-4 */
let primerCosto =30000;
let segundoCosto =100000;
let primerDescuento =0.05; 
let segundoDescuento =0.10;
let valorFinal = primerCosto - (primerCosto * primerDescuento);
console.log ("El costo inical es de $ " + primerCosto);
if (primerCosto < 30000) {
    console.log ("No cuenta con ningun descuento");
}
else if ( primerCosto >= 30000 && segundoCosto <= 100000) {
    console.log ("Tienes un 5% de descuento, su valor final con descuento es $ "+ valorFinal); 
}
else if (segundoCosto >= 100000) {
    console.log ("Tienes un 10% de descuento"); 
}
else {
    console.log ("No tiene palta pobre");
}



