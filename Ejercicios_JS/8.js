/**
 * Filtra números negativos y suma los positivos
 * @param {number[]} numeros - Array de números a procesar
 * @returns {number} - Suma de los números positivos
 */
function sumarPositivos(numeros) {
    return numeros
        .filter(num => num > 0)  // Filtra solo positivos
        .reduce((suma, num) => suma + num, 0);  // Suma los positivos
}

// Versión con un solo reduce:
function sumarPositivosEficiente(numeros) {
    return numeros.reduce((suma, num) => num > 0 ? suma + num : suma, 0);
}

// Ejemplo de uso:
const mezclaNumeros = [5, -2, 10, -8, 3, 0, 7];
const resultado = sumarPositivos(mezclaNumeros);

console.log(`Array original: [${mezclaNumeros}]`);
console.log(`Suma de positivos: ${resultado}`);  // Output: 25 (5+10+3+7)