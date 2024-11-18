// ES6 (map, arrows functions, spread)

//map 

/* 

Permite transformar elementos de un array sin modificar el original

*/

const numbers = [[14,24,34,68], 2, 3, 4, 5,]

const newArray = numbers[0].map(number => number * 2);

console.log(newArray);

//spread operator

/* 

Es un operador que permite expandir elementos de un array, realizando una copia
del array original sin modificarlo y sin perder sus elementos, y agregando nuevos
valores

*/

const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(moreNumbers);

const User = {
  name: "Delvis",
  age: 23
}

const updatedUser = { ...User, country: "Venezuela"}

console.log(updatedUser);

const numbersBidimensionales =[
  [1, 2, 3],
  [4, 5, 6],]

const newNumbersBidimensionales = [...numbersBidimensionales, [7, 8, 9]];

console.log(newNumbersBidimensionales);

const esteSiDefinitivoTesisV5EstaSi = [newNumbersBidimensionales, [10, 11, 12]];

console.log(esteSiDefinitivoTesisV5EstaSi);

//Desestructuracion

/* 

Permite extraer elementos de un objeto u array y asignarlos a variables
de una manera mas directa

*/

//Para Objetos

const person1 = {
  names: "Delvis",
  age: 23,
  country: "Venezuela",
  city: "Caracas"
}

const person1Name = person1.names;

const person1Age = person1.age;

console.log(person1Name);

const {names, age, country, city} = person1;

//Para Arrays

const colors =["red", "green", "blue", "yellow"];

const [color1, color2, color3, color4] = colors;

console.log(color1);

//En funciones

function IntroduceMe({names}) {
  console.log(`Hola, soy ${names}, el desarrollador de este sitio web`);
}

IntroduceMe(person1);

//DOM


//Ejemplo de uso de DOM

//Crear un nuevo elemento del DOM

const newDiv = document.createElement("div")

//Propiedades de un elemento del dom manipulables desde js

/* newDiv.innerHTML = `<h1>Esto es un nuevo div</h1>`

newDiv.className = "Button"

newDiv.id = "newDiv"

newDiv.style.color = "red"

newDiv.innerText = "Esto es un parrafo"

document.body.appendChild(newDiv) */

//Selectores

//Por el nombre del tag

const h1 = document.querySelector("h1")

h1.innerText = "Esto es un h1"

h1.className = "Tittle"

// Otras formas

/* const h1 = document.querySelector("h1")

const h1s = document.querySelectorAll("h1") 

*/

//Por la clase

const button = document.getElementsByClassName("Button")

button[0].innerText = "Esto es un boton"

//Por id

const container = document.getElementById("principal")

container.className = "Container"

//Por querySelector 

const container2 = document.querySelector("#principal")

//Todos los elementos de una clase

const buttons = document.querySelectorAll(".Button")

buttons.forEach((button, index) => {
  button.innerText = `Esto es el boton ${index + 1}`
})

//Eventos

const goodButton = document.querySelector("#buton-bueno")

goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno")
})

function saludar(){
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
input.addEventListener("keydown", function(event){
  if(event.key == "Enter"){
    saludar();
  }
});

let videos = [
  {
    titulo: "Video 1",
    duracion: 30
  },
  {
    titulo: "Video 2",
    duracion: 40
  },
  {
    titulo: "Video 3",
    duracion: 50
  }
]
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
function buscarVideo(){
  let searchValue = search.value;
  let result = videos.filter(video => video.titulo == searchValue);
  if(result.length > 0){
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
search.addEventListener("keydown", function(evento){
  if(evento.key == "Enter"){
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
function filtrarVideos(videos, filtro){
  return videos.filter(filtro);
}

/**
 * @function validarLongitudArray
 * @description Valida si un array tiene una longitud mayor a 0
 * @param {Array} array
 * @returns {Boolean}
 */
function validarLongitudArray(array){
  return array.length > 0;
}

/**
 * @function imprimirResultado
 * @description Imprime el resultado de la búsqueda
 * @returns {void}
 */
function imprimirResultado(){
  let result = filtrarVideos(videos, video => video.titulo == search.value);
  if(validarLongitudArray(result)){
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