let suma = 0;
let i = 1;

while (i <= 50) {
  if (i % 2 !== 0) { // Verifica si es impar
    suma += i; // Suma el número impar
    
    if (suma > 500) { // Detiene si suma supera 500
      break;
    }
  }
  i++; // Incrementa el contador
}

console.log("Suma de impares (1-50):", suma);