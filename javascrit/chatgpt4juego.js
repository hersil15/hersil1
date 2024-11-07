class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad) {
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.defensa = defensa;
      this.velocidad = velocidad;
  }

  saludar() {
      console.log(`Hola, soy ${this.nombre}.`);
  }

  calcularDaño(ataque) {
      let defensaActual = Math.floor(Math.random() * this.defensa);
      let daño = ataque - defensaActual;
      return Math.max(0, daño);
  }

  recibirAtaque(daño) {
      this.vida -= daño;
      if (this.vida <= 0) {
          this.vida = 0;
          console.log(`${this.nombre} ha muerto.`);
      }
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
      super(nombre, vida, ataque, defensa, velocidad);
      this.hechizos = hechizos;
  }

  lanzarHechizo() {
      let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
      console.log(`${this.nombre} lanza el hechizo ${hechizo.nombre} que causa ${hechizo.daño} de daño.`);
      return hechizo.daño;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas) {
      super(nombre, vida, ataque, defensa, velocidad);
      this.armas = armas;
  }

  atacarConArma() {
      let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
      console.log(`${this.nombre} ataca con ${arma.nombre} causando ${arma.daño} de daño.`);
      return arma.daño;
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
      super(nombre, vida, ataque, defensa, velocidad);
      this.flechas = flechas;
  }

  dispararFlecha() {
      console.log(`${this.nombre} dispara una flecha causando ${this.ataque} de daño.`);
      return this.ataque;
  }
}

// Creación de personajes
const personajes = [
  new Mago("Gandalf", 100, 20, 10, 30, [{ nombre: "Fuego", daño: 50 }, { nombre: "Hielo", daño: 40 }]),
  new Mago("Merlín", 90, 25, 12, 35, [{ nombre: "Rayo", daño: 45 }, { nombre: "Viento", daño: 30 }]),
  new Guerrero("Conan", 120, 30, 15, 25, [{ nombre: "Espada", daño: 30 }, { nombre: "Hacha", daño: 35 }]),
  new Guerrero("Achilles", 110, 28, 18, 20, [{ nombre: "Lanza", daño: 33 }, { nombre: "Martillo", daño: 32 }]),
  new Arquero("Legolas", 80, 20, 8, 40, ["Flecha común", "Flecha de fuego"])
];

// Juego
function realizarAtaque(atacante, defensor) {
  if (atacante instanceof Mago) {
      let ataqueTipo = Math.floor(Math.random() * 2);
      let daño = ataqueTipo === 0 ? atacante.ataque : atacante.lanzarHechizo();
      let dañoReal = defensor.calcularDaño(daño);
      console.log(`${atacante.nombre} ataca a ${defensor.nombre} causando ${dañoReal} de daño.`);
      defensor.recibirAtaque(dañoReal);
  } else if (atacante instanceof Guerrero) {
      let ataqueTipo = Math.floor(Math.random() * 2);
      let daño = ataqueTipo === 0 ? atacante.ataque : atacante.atacarConArma();
      let dañoReal = defensor.calcularDaño(daño);
      console.log(`${atacante.nombre} ataca a ${defensor.nombre} causando ${dañoReal} de daño.`);
      defensor.recibirAtaque(dañoReal);
  } else if (atacante instanceof Arquero) {
      let daño = atacante.dispararFlecha();
      let dañoReal = defensor.calcularDaño(daño);
      console.log(`${atacante.nombre} ataca a ${defensor.nombre} causando ${dañoReal} de daño.`);
      defensor.recibirAtaque(dañoReal);
  }
}

function batalla() {
  while (personajes.filter(p => p.vida > 0).length > 1) {
      let atacantes = personajes.filter(p => p.vida > 0);
      atacantes.forEach(atacante => {
          if (atacante.vida <= 0) return;
          let defensores = personajes.filter(p => p.vida > 0 && p !== atacante);
          let defensor = defensores[Math.floor(Math.random() * defensores.length)];
          realizarAtaque(atacante, defensor);
      });
  }
  let ganador = personajes.find(p => p.vida > 0);
  console.log(`¡${ganador.nombre} ha ganado la batalla!`);
}

batalla();
