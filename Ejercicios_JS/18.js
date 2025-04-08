let numero = parseFloat(prompt("Ingresa un número (0 para terminar):"));
let suma = 0;

while (numero !== 0) {
    suma += numero;
    numero = parseFloat(prompt("Ingresa otro número (0 para terminar):"));
}

alert("La suma total es: " + suma);
