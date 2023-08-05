function calcularCobro() {
    const tarifaPorHora = 3.000 ; 
    let horas = prompt("Ingresa las horas que ha estado en el estacionamiento: ");
    horas = parseFloat(horas);
    horas = Math.ceil(horas); 
    let costo = horas * tarifaPorHora; 
    console.log("El costo total es: $" ,costo); 
    
}

calcularCobro(); 

