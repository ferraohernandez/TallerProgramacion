function calcularAreaCuadrado() {
    let lado = prompt("Ingresa la longitud del lado del cuadrado: ");
    lado = parseFloat(lado);
    let area = lado * lado; 
    console.log("El área del cuadrado es: ", area);
}

calcularAreaCuadrado();
