function saludar() {
  alert("Hola desde la sección 3");
}

let boton = document.getElementById("boton");

/*
  Programación orientada a eventos
  Consta de la creación de un evento y la asignación de una función a dicho evento
  En este caso, se asigna la función saludar al evento click del botón
*/
boton.addEventListener("click", saludar);

let input = document.getElementById("input");

//Configurar que el evento se ejecute cuando presiono la tecla "Enter"
input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    saludar();
  }
});

let videos = [
  {
    titulo: "Video 1",
    duracion: 30,
  },
  {
    titulo: "Video 2",
    duracion: 40,
  },
  {
    titulo: "Video 3",
    duracion: 50,
  },
];
/**
 * Input de búsqueda
 */
let search = document.getElementById("search");

/**
 * Botón de búsqueda
 */
let searchButton = document.getElementById("searchButton");

/**
 * @function buscarVideo
 * @description Busca un video en el array de videos
 * @returns {void}
 */
function buscarVideo() {
  let searchValue = search.value;
  let result = videos.filter((video) => video.titulo == searchValue);
  if (result.length > 0) {
    alert("Video encontrado: " + result[0].titulo);
  } else {
    alert("Video no encontrado");
  }
}

/**
 * Ejecutar función si se hace click en el botón
 */
searchButton.addEventListener("click", buscarVideo);

/**
 * Ejecutar funcion si se presiona enter
 */
search.addEventListener("keydown", function (evento) {
  if (evento.key == "Enter") {
    buscarVideo();
  }
});

/**
 * Programación funcional
 * Consta de la creación de funciones que reciben otras funciones como parámetros
 * En este caso, se crea una función que recibe un array y una función de filtrado
 */

/**
 * @function filtrarVideos
 * @description Filtra un array de videos según un criterio
 * @param {Array} videos
 * @param {Function} filtro
 * @returns {Array}
 */
function filtrarVideos(videos, filtro) {
  return videos.filter(filtro);
}

/**
 * @function validarLongitudArray
 * @description Valida si un array tiene una longitud mayor a 0
 * @param {Array} array
 * @returns {Boolean}
 */
function validarLongitudArray(array) {
  return array.length > 0;
}

/**
 * @function imprimirResultado
 * @description Imprime el resultado de la búsqueda
 * @returns {void}
 */
function imprimirResultado() {
  let result = filtrarVideos(videos, (video) => video.titulo == search.value);
  if (validarLongitudArray(result)) {
    alert("Su video fue encontrado");
  } else {
    alert("No se encontró ningún video");
  }
}

/**
 * Crea una calculadora utilizando
 * - Programación orientada a eventos
 * - Programación funcional
 * - Programación orientada a objetos
 *
 * Nota: La programación orientada a eventos debe tener interfaz gráfica
 */

/**
 * Más ejercicios de programacion funcional, programacion orientada a eventos y programacion orientada a objetos
 * 1) Crea una lista de tarea en donde puedas agregar, eliminar, editar y marcar como completada una tarea
 * 2) Crea un conversor de divisas en donde puedas convertir de una divisa a otra
 * 3) Crea un juego de memoria en donde puedas emparejar cartas
 */

/**
 * Expresiones regulares
 * Son una herramienta que permite realizar validaciones de strings
 * Estructura de una expresión regular: /patrón/modificadores
 */

let texto = "Hola mundo";
let expresion = /mundo/;
console.log(expresion.test(texto));

let nombre = "Juan1";
let expresionNombre = /[A-Za-z]/;
console.log(expresionNombre.test(nombre));

let nombreCompleto = "Juan Pérez";
let expresionNombreCompleto = /[A-Za-záéíóú\s]/;
console.log(expresionNombreCompleto.test(nombreCompleto));

let email = "hola@hola.com";
let expresionEmail = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}/;
console.log(expresionEmail.test(email));

let telefono = "12345678900";
let expresionTelefono = /\d{10}/;
console.log(expresionTelefono.test(telefono));

let fecha = "12/12/2021";
let expresionFecha = /\d{2,2}\/\d{2,2}\/\d{4,4}/;
console.log(expresionFecha.test(fecha));

//Contraseña con minimo una letra miniscula, mayuscula, un numero, un caracter especial y minimo 8 caracteres
let password = "Aa1@123456";
let expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}$/;
console.log(expresionPassword.test(password));

"hola" == "Hola"

let saludo = "Hola";
let saludoRegex = /hola/i;
console.log(saludoRegex.test(saludo));

/**
 * Importar y exportar módulos
 * Permite dividir el código en diferentes archivos
 * Exportar: Se exporta una variable, función o clase
 * Importar: Se importa una variable, función o clase
 */

let funcion = () => {
  console.log("Hola");
};

let data = "Hola";

//Node.js
export { funcion, data };

//Vanilla JS
//module.exports = { funcion, data };

/**
 * 1)
 * Proyectos para la sección 3
 * Crea un formulario de registro que pidan los siguientes datos:
 * - Nombre
 * - Apellido
 * - Correo electrónico
 * - Contraseña
 * - Confirmar contraseña
 * 
 * Validaciones:
 * - Nombre y apellido: Solo letras y espacios
 * - Correo electrónico: Debe tener un formato válido
 * - Contraseña: Mínimo una letra minúscula, una mayúscula, un número, un caracter especial (!$-_.,) y mínimo 8 caracteres
 * - Confirmar contraseña: Debe ser igual a la contraseña
 * 
 * Debes crear una interfaz gráfica para el formulario y mostrar mensajes de error en caso de que el
 * usuario ingrese datos incorrectos.
 * 
 * 2) Crea una lista de tareas en donde puedas agregar, eliminar, editar y marcar como completada una tarea
 * Debe de tener una interfaz gráfica
 * 
 * 3) Crea un juego de piedra papel o tijera en donde puedas jugar contra la computadora,
 * que te muestre la cantidad de victorias, derrotas, empates y un historial de las ultimas
 * 5 partidas jugadas (debe mostrar que jugaste, que jugó la computadora)
 * 
 */