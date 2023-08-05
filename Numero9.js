function calcularMontoCheque() {
    let gastoHotelDiario = prompt("Ingresa el gasto diario del hotel: ");
    let gastoComidaDiario = prompt("Ingresa el gasto diario de la comida: ");
    let diasDeViaje = prompt("Ingresa el número de días del viaje: ");

    gastoHotelDiario = parseFloat(gastoHotelDiario);
    gastoComidaDiario = parseFloat(gastoComidaDiario);
    diasDeViaje = parseInt(diasDeViaje, 20);

    const gasto_otros_diarios = 200; 

    let totalHotel = gastoHotelDiario * diasDeViaje;
    let totalComida = gastoComidaDiario * diasDeViaje;
    let totalOtros = gasto_otros_diarios * diasDeViaje;

    let montoCheque = totalHotel + totalComida + totalOtros;

    console.log("Desglose de gastos:");
    console.log("Hotel: $", totalHotel);
    console.log("Comida: $", totalComida);
    console.log("Otros gastos: $", totalOtros);
    console.log("Monto total del cheque: $", montoCheque);
}

calcularMontoCheque();
