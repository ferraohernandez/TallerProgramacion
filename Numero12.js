function calcularFormasPago() {
    let valorTotalCompra = prompt("Ingresa el valor total de la compra: ");
    valorTotalCompra = parseFloat(valorTotalCompra);

    let valor1Cuota = valorTotalCompra; 

    let valor2CuotasTotal = valorTotalCompra * 1.05; 
    let valorPorCuota2 = valor2CuotasTotal / 2;

    let valor6CuotasTotal = valorTotalCompra * 1.40; 
    let valorPorCuota6 = valor6CuotasTotal / 6;

    console.log("1 cuota de $", valor1Cuota, " total $", valor1Cuota);
    console.log("2 cuotas de $", valorPorCuota2, " total $", valor2CuotasTotal);
    console.log("6 cuotas de $", valorPorCuota6, " total $", valor6CuotasTotal);
}

calcularFormasPago();
