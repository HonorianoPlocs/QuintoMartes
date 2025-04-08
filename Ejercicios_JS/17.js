let usuarioCorrecto = "admin";
let contrasenaCorrecta = "1234";
let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && !accesoConcedido) {
    let usuario = prompt("Ingresa tu nombre de usuario:");
    let contrasena = prompt("Ingresa tu contraseña:");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        alert("¡Acceso concedido! Bienvenido.");
        accesoConcedido = true;
    } else {
        intentos++;
        alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3.");
    }
}

if (!accesoConcedido) {
    alert("Has excedido el número de intentos. Acceso denegado.");
}
