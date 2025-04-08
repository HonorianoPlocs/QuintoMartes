const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function mostrarMenu() {
    console.log('\n=== MENÚ PRINCIPAL ===');
    console.log('1. Ver saludo');
    console.log('2. Mostrar fecha actual');
    console.log('3. Calcular el doble de un número');
    console.log('4. Salir');
  }
  
  function procesarOpcion(opcion) {
    switch(opcion) {
      case '1':
        console.log('\n¡Hola! Bienvenido al sistema.');
        break;
      case '2':
        console.log('\nFecha actual:', new Date().toLocaleDateString());
        break;
      case '3':
        readline.question('\nIngrese un número: ', num => {
          console.log(`El doble de ${num} es: ${parseFloat(num) * 2}`);
          continuarMenu();
        });
        return; // Salir temprano para evitar doble llamado
      case '4':
        console.log('\nSaliendo del sistema...');
        readline.close();
        process.exit(0);
      default:
        console.log('\nOpción no válida. Intente nuevamente.');
    }
    continuarMenu();
  }
  
  function continuarMenu() {
    readline.question('\nPresione ENTER para continuar...', () => {
      iniciarMenu();
    });
  }
  
  function iniciarMenu() {
    mostrarMenu();
    readline.question('\nSeleccione una opción (1-4): ', procesarOpcion);
  }
  
  // Iniciar aplicación
  console.log('Sistema de Menú Interactivo');
  iniciarMenu();