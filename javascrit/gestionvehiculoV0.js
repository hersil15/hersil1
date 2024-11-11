class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.disponible = true;
  }

  alquilar() {
    if (this.disponible) {
      this.disponible = false;
      console.log(`El vehículo ${this.marca} ${this.modelo} ha sido alquilado.`);
    } else {
      console.log(`El vehículo ${this.marca} ${this.modelo} ya está alquilado.`);
    }
  }

  devolver() {
    this.disponible = true;
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido devuelto.`);
  }

  informacion() {
    console.log(`
      Marca: ${this.marca}
      Modelo: ${this.modelo}
      Año: ${this.año}
      Disponible: ${this.disponible ? 'Sí' : 'No'}
    `);
  }
}

class EmpresaAlquiler {
  constructor() {
    this.flota = [];
  }

  agregar_vehiculo(vehiculo) {
    this.flota.push(vehiculo);
    console.log(`Se ha agregado ${vehiculo.marca} ${vehiculo.modelo} a la flota.`);
  }

  mostrar_vehiculos_disponibles() {
    console.log("Vehículos disponibles:");
    this.flota.filter(v => v.disponible).forEach(v => v.informacion());
  }

  mostrar_vehiculos() {
    console.log("Todos los vehículos en la flota:");
    this.flota.forEach(v => v.informacion());
  }

  buscar_vehiculo(marca, modelo) {
    const vehiculo = this.flota.find(v => v.marca === marca && v.modelo === modelo);
    if (vehiculo) {
      if (vehiculo.disponible) {
        console.log(`El vehículo ${marca} ${modelo} está disponible.`);
        return vehiculo;
      } else {
        console.log(`El vehículo ${marca} ${modelo} no está disponible en este momento.`);
      }
    } else {
      console.log(`No se encontró el vehículo ${marca} ${modelo} en la flota.`);
    }
    return null;
  }
}

// Ejemplo de uso
const empresa = new EmpresaAlquiler();

// Crear algunos vehículos y añadirlos a la flota
const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
const vehiculo2 = new Vehiculo("Ford", "Mustang", 2021);
const vehiculo3 = new Vehiculo("Honda", "Civic", 2019);

empresa.agregar_vehiculo(vehiculo1);
empresa.agregar_vehiculo(vehiculo2);
empresa.agregar_vehiculo(vehiculo3);

// Mostrar la lista de vehículos disponibles
console.log("\nVehículos disponibles inicialmente:");
empresa.mostrar_vehiculos_disponibles();

// Alquilar un vehículo y verificar si se actualiza su estado
const vehiculoAlquilado = empresa.buscar_vehiculo("Ford", "Mustang");
if (vehiculoAlquilado) {
  vehiculoAlquilado.alquilar();
}

// Mostrar la lista actualizada de vehículos disponibles
console.log("\nVehículos disponibles después de alquilar el Mustang:");
empresa.mostrar_vehiculos_disponibles();

// Devolver un vehículo y verificar si vuelve a estar disponible
vehiculoAlquilado.devolver();

// Mostrar la lista final de vehículos disponibles
console.log("\nVehículos disponibles después de devolver el Mustang:");
empresa.mostrar_vehiculos_disponibles();

// Intentar alquilar un vehículo que no existe
empresa.buscar_vehiculo("Tesla", "Model S");