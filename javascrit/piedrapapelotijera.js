function generareleccionpc() {
  const opciones = ["piedra", "papel", "tijera"];
  const ordenAleatorio = Math.floor(Math.random() * 3);
  return opciones[ordenAleatorio];
}

function elegirGanador(eleccionJugador, eleccionPc) {
  if (eleccionJugador === eleccionPc) {
    return "Empate";
  } else if (
    (eleccionJugador === "pedra" && eleccionPc === "tijera") ||
    (eleccionJugador === "papel" && eleccionPc === "piedra") ||
    (eleccionJugador === "tijera" && eleccionPc === "papel")
  ) {
    return "Jugador";
  } else {
    return "Pc";
  }
}

function jugarPiedraPapelTijera() {
  let rondasJugadas = 0;
  let victoriasJugador = 0;
  let victoriasPc = 0;

  while (true) {
    const eleccionJugador = prompt("Elige Piedra, Papel o Tijera:");
    if (!["piedra", "papel", "tijera"].includes(eleccionJugador)) {
      alert ("Selección inválida. Por favor, elige piedra, papel o tijera.");
      continue;
    }

    const eleccionPc = generareleccionpc();
    alert (`La computadora eligió: ${eleccionPc}`);

    const resultado = elegirGanador(eleccionJugador, eleccionPc);
    rondasJugadas++;

    if (resultado === "Empate") {
      alert ("¡Es un empate!");
    } else if (resultado === "Jugador") {
      alert ("¡Ganaste!");
      victoriasJugador++;
    } else {
      alert ("¡La Pc ganó!");
      victoriasPc++;
    }

    alert (`
      Partidas jugadas: ${rondasJugadas}
      Victorias del usuario: ${victoriasJugador}
      Victorias de la computadora: ${victoriasPc}
    `);

    const seguirJugando = prompt('¿Quieres seguir jugando? (Sí/No)').toLowerCase();
    if (seguirJugando !== 'si' && seguirJugando !== 'sí') {
      alert('¡Gracias por jugar!');
      break;
    }
  }
}
// Iniciar el juego
jugarPiedraPapelTijera();
