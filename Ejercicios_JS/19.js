let a = 0;
let b = 1;

console.log("Serie de Fibonacci hasta que un número supere 100:");

while (a <= 100) {
    console.log(a);
    let siguiente = a + b;
    a = b;
    b = siguiente;
}
