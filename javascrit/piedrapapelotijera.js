function generareleccionpc (){
const opciones = ["piedra", "papel", "tijera"];
const ordenAleatorio = Math.floor(Math.random()*3);
return opciones[ordenAleatorio]

}
// console.log(generareleccionpc());

function elegirGanador(eleccionJugador, eleccionPc){
  if (eleccionJugador === eleccionPc) {
    return "Empate";
  } else if (
    (eleccionJugador === "Piedra" && eleccionPc === "Tijera") ||
    (eleccionJugador === "Papel" && eleccionPc === "Piedra") ||
    (eleccionJugador === "Tijera" && eleccionPc === "Papel")
  ) {
  return "Jugador";
  } else {
    return "Pc";
  }
}

function jugarPiedraPapelTijera() {
  let rodasJugadas = 0;
  let victoriasJugador = 0;
  let victoriasPc = 0;
}
while (true) {
  const eleccionJugador = prompt("Elige Piedra, Papel o Tijera:");
  if (!["Piedra", "Papel", "Tijera"].includes(eleccionJugador)) {
    console.log("Selección inválida. Por favor, elige Piedra, Papel o Tijera.");
    continue;
  }
}

const eleccionPc = generareleccionpc();
    console.log("La computadora eligió: ${eleccionPc}");

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
      Partidas jugadas: ${partidasJugadas}
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

// Iniciar el juego
jugarPiedraPapelTijera();
