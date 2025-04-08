const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let suma = 0;
  
  function pedirNumero() {
    readline.question('Ingrese un número (0 para terminar): ', (input) => {
      const numero = Number(input);
      
      if (numero === 0) {
        console.log(`La suma total es: ${suma}`);
        readline.close();
      } else if (isNaN(numero)) {
        console.log('Por favor ingrese un número válido');
        pedirNumero();
      } else {
        suma += numero;
        pedirNumero();
      }
    });
  }
  
  pedirNumero();
