class Tarea {
  constructor(nombre, descripcion, fecha, completada = false) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fecha = fecha;
      this.completada = completada;
  }
}

class ListaTareas {
  constructor() {
      this.tareas = [];
  }

  agregarTarea(tarea) {
      this.tareas.push(tarea);
      alert("Tarea agregada exitosamente.");
  }

  completarTarea(nombre) {
      const tarea = this.tareas.find(t => t.nombre === nombre);
      if (tarea) {
          tarea.completada = true;
          alert(`La tarea "${nombre}" ha sido completada.`);
      } else {
          alert(`No se encontró una tarea con el nombre "${nombre}".`);
      }
  }

  eliminarTarea(nombre) {
      const indice = this.tareas.findIndex(t => t.nombre === nombre);
      if (indice !== -1) {
          this.tareas.splice(indice, 1);
          alert(`La tarea "${nombre}" ha sido eliminada.`);
      } else {
          alert(`No se encontró una tarea con el nombre "${nombre}".`);
      }
  }

  verTareas() {
      if (this.tareas.length === 0) {
          alert("No hay tareas en la lista.");
      } else {
          this.tareas.forEach(t => {
              alert(`Nombre: ${t.nombre}\nDescripción: ${t.descripcion}\nFecha: ${t.fecha}\nCompletada: ${t.completada ? 'Sí' : 'No'}`);
          });
      }
  }
}

const listaTareas = new ListaTareas();

function menu() {
  let opcion;
  do {
      opcion = prompt("Gestor de Tareas:\n1. Agregar tarea\n2. Completar tarea\n3. Eliminar tarea\n4. Ver tareas\n5. Salir\nElige una opción:");
      switch (opcion) {
          case '1':
              const nombre = prompt("Ingresa el nombre de la tarea:");
              const descripcion = prompt("Ingresa la descripción de la tarea:");
              const fecha = prompt("Ingresa la fecha de la tarea (YYYY-MM-DD):");
              const tarea = new Tarea(nombre, descripcion, fecha);
              listaTareas.agregarTarea(tarea);
              break;
          case '2':
              const nombreCompletar = prompt("Ingresa el nombre de la tarea a completar:");
              listaTareas.completarTarea(nombreCompletar);
              break;
          case '3':
              const nombreEliminar = prompt("Ingresa el nombre de la tarea a eliminar:");
              listaTareas.eliminarTarea(nombreEliminar);
              break;
          case '4':
              listaTareas.verTareas();
              break;
          case '5':
              alert("Saliendo del gestor de tareas.");
              break;
          default:
              alert("Opción no válida. Por favor, elige una opción del 1 al 5.");
      }
  } while (opcion !== '5');
}

menu();
