class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.vidaMaxima = vida;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.habilidadEspecialUsada = false;
    this.probabilidadEsquivar = 0.1; // 10% de probabilidad de esquivar
    this.items = [];
  }

  atacar(objetivo) {
    if (this.vida <= 0) return;
    const ataqueReal = Math.floor(Math.random() * (this.ataque + 1));
    const defensaReal = Math.floor(Math.random() * (objetivo.defensa + 1));
    let daño = Math.max(ataqueReal - defensaReal, 0);

    if (Math.random() < objetivo.probabilidadEsquivar) {
      console.log(`${objetivo.nombre} ha esquivado el ataque de ${this.nombre}!`);
      return;
    }

    objetivo.recibirDaño(daño);
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y causa ${daño} de daño.`);
  }

  recibirDaño(daño) {
    this.vida = Math.max(this.vida - daño, 0);
    if (this.vida === 0) {
      console.log(`${this.nombre} ha muerto.`);
    }
  }

  usarHabilidadEspecial(objetivo) {
    if (this.habilidadEspecialUsada) {
      console.log(`${this.nombre} ya ha usado su habilidad especial.`);
      return;
    }
    console.log(`${this.nombre} usa su habilidad especial contra ${objetivo.nombre}!`);
    this.habilidadEspecialUsada = true;
  }

  usarItem() {
    if (this.items.length === 0) return;
    const item = this.items.pop();
    console.log(`${this.nombre} usa ${item.nombre}.`);
    item.efecto(this);
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo) {
    if (this.vida <= 0) return;
    const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    const daño = hechizo.daño;
    objetivo.recibirDaño(daño);
    console.log(`${this.nombre} lanza ${hechizo.nombre} a ${objetivo.nombre} y causa ${daño} de daño.`);
  }

  usarHabilidadEspecial(objetivo) {
    super.usarHabilidadEspecial(objetivo);
    if (this.habilidadEspecialUsada) {
      this.vida = Math.min(this.vida + 50, this.vidaMaxima);
      console.log(`${this.nombre} se cura 50 puntos de vida!`);
    }
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarConArma(objetivo) {
    if (this.vida <= 0) return;
    const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    const daño = arma.daño + Math.floor(Math.random() * (this.ataque + 1));
    objetivo.recibirDaño(daño);
    console.log(`${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre} y causa ${daño} de daño.`);
  }

  usarHabilidadEspecial(objetivo) {
    super.usarHabilidadEspecial(objetivo);
    if (this.habilidadEspecialUsada) {
      this.defensa *= 2;
      console.log(`${this.nombre} dobla su defensa!`);
    }
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  dispararFlecha(objetivo) {
    if (this.vida <= 0 || this.flechas <= 0) return;
    const daño = Math.floor(Math.random() * (this.ataque + 1)) * 2;
    objetivo.recibirDaño(daño);
    this.flechas--;
    console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre} y causa ${daño} de daño. Flechas restantes: ${this.flechas}`);
  }

  usarHabilidadEspecial(objetivo) {
    super.usarHabilidadEspecial(objetivo);
    if (this.habilidadEspecialUsada) {
      this.flechas += 10;
      console.log(`${this.nombre} obtiene 10 flechas adicionales!`);
    }
  }
}

// Crear personajes
const mago1 = new Mago("Gandalf", 100, 20, 10, 15, [
  { nombre: "Bola de Fuego", daño: 50 },
  { nombre: "Rayo", daño: 40 },
  { nombre: "Hielo", daño: 30 }
]);

const mago2 = new Mago("Merlin", 90, 25, 8, 18, [
  { nombre: "Tormenta", daño: 55 },
  { nombre: "Terremoto", daño: 45 },
  { nombre: "Viento Cortante", daño: 35 }
]);

const guerrero1 = new Guerrero("Aragorn", 150, 30, 20, 20, [
  { nombre: "Espada", daño: 30 },
  { nombre: "Hacha", daño: 35 },
  { nombre: "Maza", daño: 40 }
]);

const guerrero2 = new Guerrero("Conan", 140, 35, 18, 22, [
  { nombre: "Espada de dos manos", daño: 45 },
  { nombre: "Lanza", daño: 40 },
  { nombre: "Martillo", daño: 50 }
]);

const arquero1 = new Arquero("Legolas", 110, 28, 12, 25, 20);

// Crear items
const pocionCuracion = {
  nombre: "Poción de curación",
  efecto: (personaje) => {
    const curacion = 30;
    personaje.vida = Math.min(personaje.vida + curacion, personaje.vidaMaxima);
    console.log(`${personaje.nombre} se cura ${curacion} puntos de vida.`);
  }
};

const pocionFuerza = {
  nombre: "Poción de fuerza",
  efecto: (personaje) => {
    personaje.ataque += 10;
    console.log(`${personaje.nombre} aumenta su ataque en 10 puntos.`);
  }
};

// Asignar items a personajes
mago1.items.push(pocionCuracion);
guerrero1.items.push(pocionFuerza);
arquero1.items.push(pocionCuracion);

const personajes = [mago1, mago2, guerrero1, guerrero2, arquero1];

function seleccionarObjetivo(atacante, personajes) {
  const objetivosValidos = personajes.filter(p => p !== atacante && p.vida > 0);
  return objetivosValidos[Math.floor(Math.random() * objetivosValidos.length)];
}

function realizarAccion(personaje, objetivo) {
  const accion = Math.random();
  if (accion < 0.4) {
    personaje.atacar(objetivo);
  } else if (accion < 0.7) {
    if (personaje instanceof Mago) {
      personaje.lanzarHechizo(objetivo);
    } else if (personaje instanceof Guerrero) {
      personaje.atacarConArma(objetivo);
    } else if (personaje instanceof Arquero) {
      personaje.dispararFlecha(objetivo);
    }
  } else if (accion < 0.9) {
    personaje.usarHabilidadEspecial(objetivo);
  } else {
    personaje.usarItem();
  }
}

function batalla() {
  let ronda = 1;
  while (personajes.filter(p => p.vida > 0).length > 1) {
    console.log(`\n--- Ronda ${ronda} ---`);
    const ordenTurno = personajes
      .filter(p => p.vida > 0)
      .map(p => ({ personaje: p, iniciativa: Math.floor(Math.random() * (p.velocidad + 1)) }))
      .sort((a, b) => b.iniciativa - a.iniciativa);

    for (const { personaje } of ordenTurno) {
      const objetivo = seleccionarObjetivo(personaje, personajes);
      if (objetivo) {
        realizarAccion(personaje, objetivo);
      }
    }

    ronda++;
  }

  const ganador = personajes.find(p => p.vida > 0);
  console.log(`\n¡${ganador.nombre} ha ganado la batalla!`);
}

console.log("¡Bienvenido al juego de rol!");
batalla();