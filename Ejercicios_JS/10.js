/**
 * Genera y muestra la tabla de multiplicar de un número
 * @param {number} numero - Número base para la tabla
 */
function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo de uso con entrada de usuario (versión para Node.js)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número para generar su tabla de multiplicar: ', num => {
    mostrarTablaMultiplicar(parseInt(num));
    readline.close();
});