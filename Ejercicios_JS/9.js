/**
 * Encuentra el primer número múltiplo de 5 en un array
 * @param {number[]} numeros - Array de números a evaluar
 * @returns {number|undefined} - Primer múltiplo de 5 encontrado o undefined si no existe
 */
function encontrarPrimerMultiploDe5(numeros) {
    return numeros.find(num => num % 5 === 0);
}

// Ejemplo de uso:
const numerosEjemplo = [2, 7, 12, 15, 20, 3, 8, 25];
const resultado = encontrarPrimerMultiploDe5(numerosEjemplo);

console.log("Array de números:", numerosEjemplo);
console.log("Primer múltiplo de 5:", resultado); // Output: 15