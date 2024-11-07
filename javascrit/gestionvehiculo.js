/*

Ejercicio: *Sistema de Gestión de Vehículos*

Descripción: Imagina que estás creando un sistema simple para gestionar vehículos 
en una pequeña empresa de alquiler de autos. El sistema necesita manejar información 
básica sobre cada vehículo y realizar operaciones de alquiler y devolución.

Requisitos:

1. Clase Vehiculo:
   - Atributos:
     - marca (string): la marca del vehículo (por ejemplo, Toyota, Ford).
     - modelo (string): el modelo del vehículo (por ejemplo, Corolla, Mustang).
     - año (int): el año de fabricación del vehículo.
     - disponible (boolean): indica si el vehículo está disponible para alquilar.
   - Métodos:
     - alquilar(): cambia el estado de disponibilidad a false si el vehículo está disponible. Si no está disponible, muestra un mensaje indicando que ya está alquilado.
     - devolver(): cambia el estado de disponibilidad a true.
     - informacion(): imprime toda la información del vehículo (marca, modelo, año, disponibilidad).

2. Clase EmpresaAlquiler:
   - Atributos:
     - flota (lista de objetos Vehiculo): lista de todos los vehículos disponibles en la empresa.
   - Métodos:
     - agregar_vehiculo(vehiculo): añade un vehículo a la flota.
     - mostrar_vehiculos_disponibles(): imprime la información de todos los vehículos que están disponibles para alquilar.
     - mostrar_vehiculos(): imprime la información de todos los vehículos en la flota.
     - buscar_vehiculo(marca, modelo): busca un vehículo en la flota según la marca y el modelo, y devuelve el objeto Vehiculo si se encuentra disponible. Si no está disponible, muestra un mensaje indicando que el vehículo no está disponible o no se encontró.

Ejemplo de Uso:

1. Crear algunos vehículos y añadirlos a la flota de la empresa.
2. Mostrar la lista de vehículos disponibles.
3. Alquilar un vehículo y verificar si se actualiza su estado.
4. Devolver un vehículo y verificar si vuelve a estar disponible.
*/

class Vehiculo {
  constructor(marca, modelo, anio, disponible = true) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.disponible = disponible;
  }

  alquilar() {
    if (this.disponible) {
      console.log(
        `Has alquilado el carro ${this.marca} ${this.modelo} del ${this.anio}`
      );
      this.disponible = false;
    } else {
      console.log(
        `El carro ${this.marca} ${this.modelo} del año ${this.anio} esta alquilado`
      );
    }
  }

  devolver() {
    if (!this.disponible) {
      console.log(
        `Estas devolviendo el carro ${this.marca} ${this.modelo} del ${this.anio}`
      );
      this.disponible = true;
    } else {
      console.log(`No puedes devolver un auto que no esta alquilado`);
    }
  }

  informacion() {
    /*
    console.log(this.modelo, this.marca, this.anio, this.disponible)
    console.log("Auto modelo: " + this.modelo + " marca: " + this.marca +
      " año: " + this.anio + " disponibilidad: " + this.disponible
    );
    console.log(
      `Información del vehiculo:
      \n Modelo: ${this.modelo}
      \n Marca: ${this.marca}
      \n Año: ${this.anio}
      \n Disponibilidad: ${this.disponible}`
    )
    */
    console.log(
      `
  Información del vehiculo:
  Modelo: ${this.modelo}
  Marca: ${this.marca}
  Año: ${this.anio}
  Disponibilidad: ${this.disponible ? "Disponible" : "Ocupado"}
`
    );
  }
}

class EmpresaAlquiler {
  constructor(flota = []) {
    this.flota = flota;
  }

  agregarVehiculo(vehiculo) {
    this.flota.push(vehiculo);
  }

  mostrarVehiculosDisponibles() {
    /*
      let vehiculos_disponibles = this.flota.filter(
        (vehiculo) => vehiculo.disponible === true
      );
      for (vehiculo of vehiculos_disponibles) {
        console.log(
        `
          Información del vehiculo:
          Modelo: ${vehiculo.modelo}
          Marca: ${vehiculo.marca}
          Año: ${vehiculo.anio}
          Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `);
    */

    for (let vehiculo of this.flota) {
      if (vehiculo.disponible) {
        console.log(
          `
            Información del vehiculo:
            Modelo: ${vehiculo.modelo}
            Marca: ${vehiculo.marca}
            Año: ${vehiculo.anio}
            Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `
        );
      }
    }
  }

  mostrarVehiculos() {
    for (let vehiculo of this.flota) {
      console.log(
        `
            Información del vehiculo:
            Modelo: ${vehiculo.modelo}
            Marca: ${vehiculo.marca}
            Año: ${vehiculo.anio}
            Disponibilidad: ${vehiculo.disponible ? "Disponible" : "Ocupado"}
        `
      );
    }
  }
}

//1
let vehiculo1 = new Vehiculo("Ford", "Camaro", "1997");
let vehiculo2 = new Vehiculo("Harley-Davidson", "San Luis", "2023");
let vehiculo3 = new Vehiculo("Jeep", "Wagoneer", "2021")

let vehiculos = [vehiculo1, vehiculo2, vehiculo3]

//2
let autorent = new EmpresaAlquiler(vehiculos)
autorent.mostrarVehiculosDisponibles()

//3
autorent.flota[2].alquilar()
autorent.flota[2].informacion()