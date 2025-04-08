const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Generar número aleatorio entre 1 y 10
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;
  
  function adivinarNumero() {
    readline.question('Adivina el número (1-10): ', input => {
      const numeroUsuario = parseInt(input);
      intentos++;
  
      if (numeroUsuario === numeroAleatorio) {
        console.log(`¡Correcto! Lo adivinaste en ${intentos} intentos.`);
        readline.close();
      } else {
        console.log('Incorrecto. Intenta nuevamente.');
        adivinarNumero(); // Vuelve a pedir el número
      }
    });
  }
  
  console.log('¡Bienvenido al juego de adivinar el número!');
  adivinarNumero();