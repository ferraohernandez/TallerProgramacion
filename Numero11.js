function calcularPromedioPonderado() {
    let examen1 = prompt("Ingresa la calificación del primer examen: ");
    let examen2 = prompt("Ingresa la calificación del segundo examen: ");
    let examen3 = prompt("Ingresa la calificación del tercer examen: ");

    examen1 = parseFloat(examen1);
    examen2 = parseFloat(examen2);
    examen3 = parseFloat(examen3);

    const ponderacionExamen1 = 0.25; 
    const ponderacionExamen2 = 0.25; 
    const ponderacionExamen3 = 0.50; 

    let promedio = examen1 * ponderacionExamen1 + examen2 * ponderacionExamen2 + examen3 * ponderacionExamen3;

    console.log("El promedio ponderado es: ", promedio);
}

calcularPromedioPonderado();
