const maxIntentos = 6;
let intentosRestantes = maxIntentos;

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
function adivinarNumero() {
  const inputUsuario = parseInt(prompt(`Ingresa un número entre 1 y 100. Intentos restantes: ${intentosRestantes}`));
  if (isNaN(inputUsuario) || inputUsuario < 1 || inputUsuario > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    return;
}
  intentosRestantes--;
  if (inputUsuario === numeroAleatorio) {
  alert(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${maxIntentos - intentosRestantes} intentos.`);
}
  else if (inputUsuario < numeroAleatorio) {
  alert(`El número ingresado es menor que el número generado por la computadora. Intentos restantes: ${intentosRestantes}`);
}
else {
  alert(`El número ingresado es mayor que el número generado por la computadora. Intentos restantes: ${intentosRestantes}`);
}
if (intentosRestantes === 0 && inputUsuario !== numeroAleatorio) {
  alert(`Lo siento, se acabaron los intentos. El número correcto era ${numeroAleatorio}.`);
}
else if (inputUsuario !== numeroAleatorio) {
  adivinarNumero();
}
}
adivinarNumero();

