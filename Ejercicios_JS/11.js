// Generar los primeros 10 números de Fibonacci
let a = 0, b = 1;
let secuencia = [a, b]; // Inicia con 0 y 1

for (let i = 2; i < 10; i++) {
    let siguiente = a + b;
    secuencia.push(siguiente);
    a = b;
    b = siguiente;
}

console.log("Primeros 10 números de Fibonacci:");
console.log(secuencia.join(', '));