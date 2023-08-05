function PrecioFinal() {
    let precioOriginal = prompt("Ingresa el precio original del artículo: ");
    precioOriginal = parseFloat(precioOriginal);

    const descuento = 0.20; 
    const iva = 0.15; 

    let precioConDescuento = precioOriginal * (1 - descuento); 
    let precioFinal = precioConDescuento * (1 + iva); 

    console.log("El precio con descuento es: $", precioConDescuento);
    console.log("El precio final es: $", precioFinal);
}

PrecioFinal();
