function calcularEdad(anioNacimiento) {
    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    let edad = anioActual - anioNacimiento;
    return edad;
}

let anioNacimiento = prompt("Por favor, introduce su año de nacimiento:");
let edad = calcularEdad(anioNacimiento);
console.log("su edad es: " + edad);




