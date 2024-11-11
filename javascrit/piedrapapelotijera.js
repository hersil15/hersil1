let rondasJugadas = 0;
let victoriasJugador = 0;
let victoriasPc = 0;

function generarEleccionPc (){
  const opciones = ["piedra", "papel", "tijera"];
  const ordenAleatorio = Math.floor(Math.random()*3);
  return opciones[ordenAleatorio]
}

function elegirGanador(eleccionJugador, eleccionPc){
  if (eleccionJugador === eleccionPc) {
    return "Empate";
  } else if (
    (eleccionJugador === "piedra" && eleccionPc === "tijera") ||
    (eleccionJugador === "papel" && eleccionPc === "piedra") ||
    (eleccionJugador === "tijera" && eleccionPc === "papel")
  ) {
    return "Jugador";
  } else {
    return "Pc";
  }
}

while (true) {
  const eleccionJugador = prompt("Elige Piedra, Papel o Tijera:");
  if (!["piedra", "papel", "tijera"].includes(eleccionJugador)) {
    console.log("Selección inválida. Por favor, elige Piedra, Papel o Tijera.");
  } else {
    const eleccionPc = generarEleccionPc();
    console.log(`La computadora eligió: ${eleccionPc}`);
    const resultado = elegirGanador(eleccionJugador, eleccionPc);
    rondasJugadas++;
    if (resultado === "Empate") {
      console.log("¡Es un empate!");
    } else if (resultado === "Jugador") {
      console.log("¡Ganaste!");
      victoriasJugador++;
    } else {
      console.log("¡La Pc ganó!");
      victoriasPc++;
    }
    console.log(`
      Partidas jugadas: ${rondasJugadas}
      Victorias del usuario: ${victoriasJugador}
      Victorias de la computadora: ${victoriasPc}
    `);
    const seguirJugando = prompt('¿Quieres seguir jugando? (Sí/No)').toLowerCase();
    if (seguirJugando !== 'si' && seguirJugando !== 'sí') {
      console.log('¡Gracias por jugar!');
      break;
    }
  }
}
