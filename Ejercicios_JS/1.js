// Ejercicio 1: Sumar elementos de un array
function sumarArray(numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

// Ejemplo de uso
const miArray = [2, 8, 1, 4, 5];
console.log("Resultado:", sumarArray(miArray)); // Debe mostrar 15