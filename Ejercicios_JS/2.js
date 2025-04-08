/**
 * Encuentra el número mayor y menor en un array
 * @param {number[]} numeros - Array de números a evaluar
  @returns {Object} - Objeto con las propiedades mayor y menor
 */
function encontrarMayorYMenor(numeros) {
    if (numeros.length === 0) {
        throw new Error("El array no puede estar vacío");
    }

    return {
        mayor: Math.max(...numeros),
        menor: Math.min(...numeros)
    };
}

// Ejemplo de uso:
const numeros = [12, 5, 8, 21, 3, 10];
const resultado = encontrarMayorYMenor(numeros);
console.log(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`);