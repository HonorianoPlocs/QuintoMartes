/**
 * Ordena un array de números de menor a mayor (implementación manual)
 * @param {number[]} arr - Array a ordenar
 * @returns {number[]} - Array ordenado
 */
function ordenarArray(arr) {
    // Copia el array original para no modificarlo directamente
    const resultado = [...arr];
    
    // Implementación del algoritmo Bubble Sort
    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado.length - 1; j++) {
            // Compara elementos adyacentes
            if (resultado[j] > resultado[j + 1]) {
                // Intercambia los elementos si están en el orden incorrecto
                [resultado[j], resultado[j + 1]] = [resultado[j + 1], resultado[j]];
            }
        }
    }
    
    return resultado;
}

// Ejemplo de uso:
const numeros = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", numeros);
console.log("Array ordenado:", ordenarArray(numeros));