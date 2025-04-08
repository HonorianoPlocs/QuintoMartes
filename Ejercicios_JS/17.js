const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const PASSWORD_CORRECTA = "1234";
  let intentos = 3;
  
  function verificarPassword() {
    readline.question('Ingrese la contraseña: ', (password) => {
      if (password === PASSWORD_CORRECTA) {
        console.log('¡Acceso concedido!');
        readline.close();
      } else {
        intentos--;
        if (intentos > 0) {
          console.log(`Contraseña incorrecta. Intentos restantes: ${intentos}`);
          verificarPassword();
        } else {
          console.log('Acceso bloqueado. No quedan intentos.');
          readline.close();
        }
      }
    });
  }
  
  verificarPassword();