function obtenerSeleccionComputadora() {
  const opciones = ['Piedra', 'Papel', 'Tijera'];
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opciones[indiceAleatorio];
}

function determinarGanador(seleccionUsuario, seleccionComputadora) {
  if (seleccionUsuario === seleccionComputadora) {
    return 'Empate';
  } else if (
    (seleccionUsuario === 'Piedra' && seleccionComputadora === 'Tijera') ||
    (seleccionUsuario === 'Papel' && seleccionComputadora === 'Piedra') ||
    (seleccionUsuario === 'Tijera' && seleccionComputadora === 'Papel')
  ) {
    return 'Usuario';
  } else {
    return 'Computadora';
  }
}

function jugarPiedraPapelTijera() {
  let partidasJugadas = 0;
  let victoriasUsuario = 0;
  let victoriasComputadora = 0;

  while (true) {
    const seleccionUsuario = prompt('Elige Piedra, Papel o Tijera:');
    if (!['Piedra', 'Papel', 'Tijera'].includes(seleccionUsuario)) {
      console.log('Selección inválida. Por favor, elige Piedra, Papel o Tijera.');
      continue;
    }

    const seleccionComputadora = obtenerSeleccionComputadora();
    console.log(`La computadora eligió: ${seleccionComputadora}`);

    const resultado = determinarGanador(seleccionUsuario, seleccionComputadora);
    partidasJugadas++;

    if (resultado === 'Empate') {
      console.log('¡Es un empate!');
    } else if (resultado === 'Usuario') {
      console.log('¡Ganaste!');
      victoriasUsuario++;
    } else {
      console.log('¡La computadora ganó!');
      victoriasComputadora++;
    }

    console.log(`
      Partidas jugadas: ${partidasJugadas}
      Victorias del usuario: ${victoriasUsuario}
      Victorias de la computadora: ${victoriasComputadora}
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