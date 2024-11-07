class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad
  }
  Saludar(){
    return `Hola soy, ${this.nombre}, tengo ${this.vida} de vida,  mi ataque es de ${this.ataque},
     tengo ${this.defensa}de defensa y mi velocidad es de ${this.velocidad} `;
}
  Atacar (){
  return `${this.nombre} laza un ataque ${this.ataque}`;
}
}
class Mago extends Personaje {
  constructor (nombre, vida, ataque, defensa, velocidad, (hechizos{ fuego,60})){
    super(nombre, vida, ataque, defensa, velocidad)
    this.hechizo = this.hechizo
  }
}
