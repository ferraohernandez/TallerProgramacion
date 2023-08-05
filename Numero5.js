function PresupuestoPintura () {
    const PrecioPorMetroCuadrado = 40;
    let MetrosCuadrados = prompt("Ingrese los metros cuadrados que se pintaron ");
    MetrosCuadrados = parseFloat(MetrosCuadrados);
    let costo = MetrosCuadrados * PrecioPorMetroCuadrado;

    console.log("El costo total es: $", costo)
}
PresupuestoPintura();