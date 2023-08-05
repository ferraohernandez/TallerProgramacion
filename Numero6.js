function calcularHipotenusa() {
    let ladoA = prompt("Ingresa la longitud del primer lado (A): ");
    let ladoB = prompt("Ingresa la longitud del segundo lado (B): ");
    ladoA = parseFloat(ladoA);
    ladoB = parseFloat(ladoB);
    let hipotenusa = Math.sqrt(ladoA * ladoA + ladoB * ladoB); 
    console.log("La longitud de la hipotenusa es: ", hipotenusa);
}

calcularHipotenusa();
