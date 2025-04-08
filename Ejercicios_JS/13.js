const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingrese un número para la cuenta regresiva: ', numero => {
    let contador = parseInt(numero);
    
    console.log(`\nCuenta regresiva desde ${contador}:`);
    
    while (contador >= 0) {
      console.log(contador);
      contador--; // Decrementa el contador
    }
    
    console.log('¡Tiempo terminado!');
    readline.close();
  });