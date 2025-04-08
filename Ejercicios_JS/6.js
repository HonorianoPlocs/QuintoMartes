/**
 * Invierte el orden de los elementos de un array
 * @param {any[]} arr - Array a invertir
 * @returns {any[]} - Nuevo array con los elementos en orden inverso
 */
function invertirArray(arr) {
    const resultado = [];
    
    // Recorremos el array original desde el final hacia el inicio
    for (let i = arr.length - 1; i >= 0; i--) {
        resultado.push(arr[i]);
    }
    
    return resultado;
}

// Versión alternativa usando destructuring (ES6)
function invertirArrayDestructuring(arr) {
    const resultado = [...arr];
    for (let i = 0; i < Math.floor(resultado.length / 2); i++) {
        [resultado[i], resultado[resultado.length - 1 - i]] = 
        [resultado[resultado.length - 1 - i], resultado[i]];
    }
    return resultado;
}

// Ejemplo de uso:
const original = [1, 2, 3, 4, 5];
const invertido = invertirArray(original);

console.log("Array original:", original);
console.log("Array invertido:", invertido);