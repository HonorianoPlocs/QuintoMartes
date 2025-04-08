/**
 * Busca un nombre en un array y devuelve su posición
 * @param {string[]} nombres - Array de nombres
 * @param {string} nombreBuscado - Nombre a buscar
 * @returns {number} - Índice del nombre encontrado o -1 si no existe
 */
function buscarNombre(nombres, nombreBuscado) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombreBuscado) {
            return i; // Devuelve la posición si lo encuentra
        }
    }
    return -1; // Devuelve -1 si no lo encuentra
}

// Versión alternativa con indexOf():
function buscarNombreIndexOf(nombres, nombreBuscado) {
    return nombres.indexOf(nombreBuscado);
}

// Ejemplo de uso:
const listaNombres = ['Ana', 'Carlos', 'Diana', 'Elena', 'Juan'];
const nombreABuscar = 'Diana';

const posicion = buscarNombre(listaNombres, nombreABuscar);
console.log(posicion !== -1 
    ? `El nombre "${nombreABuscar}" está en la posición ${posicion}`
    : `El nombre "${nombreABuscar}" no se encontró en la lista`);