const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function pedirNumeroPositivo() {
    let numero;
    
    do {
      const input = readline.question('Ingrese un número mayor que 0: ');
      numero = parseFloat(input);
      
      if (isNaN(numero) || numero <= 0) {
        console.log('Error: Debe ingresar un número válido mayor que 0');
      }
    } while (isNaN(numero) || numero <= 0);
    
    return numero;
  }
  
  // Ejemplo de uso
  console.log('Validación de entrada numérica');
  const numeroValido = pedirNumeroPositivo();
  console.log(`Número válido ingresado: ${numeroValido}`);
  readline.close();