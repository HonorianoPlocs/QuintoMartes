/**
 * Convierte todos los nombres de un array a mayúsculas
 * @param {string[]} nombres - Array de nombres a convertir
 * @returns {string[]} - Nuevo array con los nombres en mayúsculas
 */
function convertirAMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}

// Ejemplo de uso:
const nombresOriginales = ['ana', 'carlos', 'diana', 'elena', 'juan'];
const nombresMayusculas = convertirAMayusculas(nombresOriginales);

console.log("Nombres originales:", nombresOriginales);
console.log("Nombres en mayúsculas:", nombresMayusculas);