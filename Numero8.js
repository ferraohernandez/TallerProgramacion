function calcularAhorroAnual() {
    let sueldoSemanal = prompt("Ingrese su sueldo semanal: ");
    sueldoSemanal = parseFloat(sueldoSemanal);

    const ahorro_porcentual = 0.15; 
    const semanas_por_mes = 4; 
    const meses_por_anio = 12; 

    let ahorroSemanal = sueldoSemanal * ahorro_porcentual;
    let ahorroAnual = ahorroSemanal * semanas_por_mes * meses_por_anio;

    console.log("El ahorro anual es: $", ahorroAnual);
}

calcularAhorroAnual();
