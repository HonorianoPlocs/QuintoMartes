/**
 * Cuenta cuántos números pares hay en un array
 * @param {number[]} numeros - Array de números a evaluar
 * @returns {number} - Cantidad de números pares encontrados
 */
function contarPares(numeros) {
    return numeros.filter(num => num % 2 === 0).length;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Cantidad de pares: ${contarPares(numeros)}`);  // Output: 4
