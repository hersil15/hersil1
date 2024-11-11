//SCOPE (Alcance)
//Variable global
var nombre = "Juan";
//Variable local
let apellido = "Perez";
//Constante (no puede ser reasignada, alcanza el scope global)
const PI = 3.1416;

//Puedo cambiarle el valor
nombre = "Pedro";
//No puedo cambiarle el valor
//PI = 3.14;

//Alcance
if (true) {
  //variable local (solo se puede acceder dentro del bloque)
  let numero1 = 16;
  //variable global (se puede acceder desde cualquier parte)
  var numero2 = 20;
}

//console.log(numero1); //Error
console.log(numero2);
/*
  Si se declara una variable let fuera de todos los bloques
  se puede acceder a ella desde cualquier parte del código
  let numero3 = 30;
*/
if (true) {
  if (true) {
    let local = "Hola, soy local";
  }
  //La variable local solo se puede acceder dentro del
  //bloque del que fue declarada
  //console.log(local) error
}

//Funciones
/*
  Nos permiten reutilizar un bloque de codigo,
  son similares a los MIXINS que hemos visto en SASS
*/

//Funcion sin parametros
//Declaramos la función
function saludar() {
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0) {
  console.log("Hola, soy " + nombre + " y tengo " + edad + " años");
}

saludarPersona("Juan", 20);
saludarPersona("Pedro");
saludarPersona("Maria");
saludarPersona();

/*
  Crea el ejercicio de la calculadora, realizado el día de ayer, pero ahora
  utilizando funciones.
*/

//Funcion con retorno
function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

/*
  Ejercicios de funciones con retorno
*/

function calcularIMC(peso = 0, altura = 0) {
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.7)); //24.221453287197235

function calcularAreaTriangulo(base = 0, altura = 0) {
  (base * altura) / 2;
}

console.log(calcularAreaTriangulo(10, 5)); //undefined

function calcularAreaCirculo(radio = 0) {
  if (radio <= 0) {
    return "El radio debe ser mayor a 0";
  } else if (typeof radio !== "number") {
    return "El radio debe ser un número";
  } else {
    if (radio <= 5) {
      return "El radio debe ser mayor a 5";
    }
    return 3.14 * (radio * radio);
  }
}

console.log(calcularAreaCirculo(2));

function salirFinDeSemana(tiempo = false, dinero = false, ganas = false) {
  if (tiempo && dinero && ganas) {
    console.log("Saldré a divertirme");
  }
  if (tiempo && dinero) {
    return "Saldré desganado";
  }
  if (tiempo) {
    if (ganas) {
      console.log("Saldre a hacer ejecicio");
    }
    return "Saldré a matar el tiempo";
  }
  return "No saldré";
}

console.log(salirFinDeSemana(true, false, true));

//Funciones flecha (Arrow functions) también son conocidas como funciones anónimas
//Son una forma de escribir funciones de manera más corta y pueden ser
//asignadas a una variable

var funcionFlecha = (numero1 = 0, numero2 = 0) => {
  numero1 + numero2;
};

console.log(funcionFlecha(10, 30));

/*
  Ejercicios de funciones con retorno y sin retorno. Debes determinar que imprime
  cada uno de los console.log

  function suma(numero1, numero2){
    return numero1 + numero2;
  }
  
  console.log(suma(10, 20));

  function resta(numero1, numero2){
    console.log(numero1 - numero2);
  }
  
  console.log(resta(10, 20));

  function hallarAreaTriangulo(base, altura){
    if(base <= 0 || altura <= 0){
      return "Los valores deben ser mayores a 0";
    } else if(base === altura){
      return "La base y la altura no pueden ser iguales";
    } else {
      console.log((base * altura) / 2;) 
    }
  }

  console.log(hallarAreaTriangulo(10, 5));

  function hallarAreaCirculo(radio){
    if(radio <= 0){
      return "El radio debe ser mayor a 0";
    } else if(typeof radio !== "number"){
      return "El radio debe ser un número";
    } else {
      if(radio <= 5){
        return "El radio debe ser mayor a 5";
      }
      console.log(3.14 * (radio * radio));
    }
  }

  console.log(hallarAreaCirculo(2));
*/

/*
  Recursividad (una función se llama a si misma)
*/

function contar(numero) {
  if (numero >= 100) {
    return;
  }
  console.log(numero);
  contar(numero + 1);
}

contar(0);

function sumar(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

function restar(numero1 = 0, numero2 = 0) {
  return numero1 - numero2;
}

function multiplicar(numero1 = 0, numero2 = 0) {
  return numero1 * numero2;
}

function dividir(numero1 = 0, numero2 = 0) {
  return numero1 / numero2;
}

//Funciones dentro de funciones
function calculadora(numero1 = 0, numero2 = 0, operacion = "sumar") {
  if (operacion === "sumar") {
    return sumar(numero1, numero2);
  } else if (operacion === "restar") {
    return restar(numero1, numero2);
  } else if (operacion === "multiplicar") {
    return multiplicar(numero1, numero2);
  } else if (operacion === "dividir") {
    if(numero2 === 0){
      return "No se puede dividir por 0";
    }
    return dividir(numero1, numero2);
  } else {
    return "Operación no válida";
  }
}

var global = "Soy global";

function funcion_alcance() {
  console.log(global);
}

funcion_alcance();

/*
  Ejercicios de recursividad
  1. Crea una función que imprima la potencia de un número elevado a otro número.
  2. Crea una función que reciba un número y retorne el factorial de ese número.
  3. Crea una función que imprima la sucesion de Fibonacci hasta el número que se le pase como parametro.
*/

//1
function elevar(numero, potencia) {
  if (potencia === 0) {
    return 1;
  }
  return numero * elevar(numero, potencia - 1);
}

console.log(elevar(2, 3)); //8

//2

function factorial(numero) {
  if (numero === 0) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

console.log(factorial(5)); //120

//3
function fibonacci(numero,resultado_anterior = 0, resultado_actual = 1) {
  if (numero === 0) {
    return;
  }
  if(resultado_actual < numero){
    console.log(resultado_actual);
    fibonacci(numero, resultado_actual, resultado_anterior + resultado_actual);
  }
}

fibonacci(50); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

/*
  Los prototipos en javascript son una forma de agregar propiedades y metodos a un objeto
  que ya ha sido creado.
*/


console.log("Pablo clavo un clavito")

/*
  En un objeto hay propiedades y metodos
  Las propiedades devuelven un valor que puede ser string, number, boolean, etc.
  Los metodos ejecutan una funcion
*/

//Metodos de strings
var texto = "Hola, soy un texto";
//Transformar un string a mayusculas
console.log(texto.toUpperCase());
//Transformar un string a minusculas
console.log(texto.toLowerCase());
//Obtiene la posicion de una palabra en un string
console.log(texto.indexOf("soy"));
//Corta un string
console.log(texto.slice(5, 8));
//Divide un string en un array
console.log(texto.split(" "));
//Reemplaza una palabra por otra
console.log(texto.replace("Hola", "Adios"));
//Reemplaza todas las ocurrencias de una palabra por otra
console.log(texto.replaceAll("o", "0"));
//Verifica si un string incluye una palabra
console.log(texto.includes("Hola"));
//Verifica si un string empieza con una palabra
console.log(texto.startsWith("Hola"));
//Verifica si un string termina con una palabra
console.log(texto.endsWith("texto"));
//Obtiene la posicion de un caracter en un string
console.log(texto.charAt(8));
//Obtiene el codigo ASCII de un caracter
console.log(texto.charCodeAt(2));
//Recorta los espacios en blanco de un string
console.log("  Hola, soy un texto   ".trim());
//Repite un string
console.log(texto.repeat(3));
//Concatena dos strings
console.log(texto.concat(" y yo soy otro texto"));
// texto + " y yo soy otro texto"

//Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de letras que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)

//1 (De forma sencilla)
function contarLetras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.length;
}
console.log(contarLetras("Hola, soy un texto")); //17

//1 (Solo contando letras)
function contarLetras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.split(" ").join("").length;
}
console.log(contarLetras("Hola, soy un texto")); //13

//2
function contarPalabras(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  return texto.split(" ").length;
}
console.log(contarPalabras("Hola, soy un texto")); //4

//3
function invertirTexto(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  if(texto === ""){
    return "";
  }
  return invertirTexto(texto.slice(1)) + texto.charAt(0);
}

console.log(invertirTexto("Hola")); //aloH

//4
function esPalindromo(texto){
  if(typeof texto !== "string"){
    return "El valor debe ser un string";
  }
  texto = texto.toLowerCase();
  //console.log(texto.split(" ").join(""), invertirTexto(texto).split(" ").join(""));
  if(texto.split(" ").join("") === invertirTexto(texto).split(" ").join("")){
    return "Es palindromo";
  }
  return "No es palindromo";
}

console.log(esPalindromo("La ruta nos aporto otro paso natural")); //Es palindromo


//Arrays y metodos de array
var frutas = ["Manzana", "Pera", "Uva", "Sandia"];
console.log(frutas[1]);
//Lista de compras
var lista = [
  ["Manzana", "Pera", "Uva", "Sandia"],
  ["carne molida", "pollo", "pescado", "cerdo"],
  ["leche", "jugo", "agua", "refresco"],
  [["papas", "zanahorias"], ["cebolla", "tomate"]]
];

console.log(lista[3][0][1])


inventario = [
  {
    categoria: "Frutas",
    productos: [
      {
        nombre: "Manzana",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Pera",
        precio: 2.5,
        cantidad: 5
      }
    ]
  },
  {
    categoria: "Carnes",
    productos: [
      {
        nombre: "Pollo",
        precio: 3.5,
        cantidad: 20
      },
      {
        nombre: "Res",
        precio: 5.5,
        cantidad: 15
      }
    ]
  },
  {
    categoria: "Lacteos",
    productos: [
      {
        nombre: "Leche",
        precio: 1.5,
        cantidad: 10
      },
      {
        nombre: "Queso",
        tipos:[
          {
            nombre: "Pecorino",
            precio: 2.5,
            cantidad: 5
          },
          {
            nombre: "Mozarella",
            precio: 3.5,
            cantidad: 10
          }
        ]
      }
    ]
  }
]

console.log(inventario[2].productos[1].tipos[0].nombre)

const inventario_mercado = [
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

/*
  Ejercicios de selección de datos de un array de objetos
  1. Imprime el nombre de la marca de manzanas que proviene de Chile
  2. Imprime el precio de la manzana Fuji
  3. Imprime el array de productos de la marca de manzanas que proviene de Chile
  4. Imprime el nombre de la marca de pollo que proviene de Brasil
  5. Imprime el precio del pollo entero
  6. Imprime el proveedor (objeto) de leche de méxico
  7. Imprime la vida util del queso de Oveja
*/

//Metodos de array
frutas = ["Manzana", "Pera", "Uva", "Sandia"];
//Longitud del array
console.log(frutas.length);
//Agregar un elemento al final del array
frutas.push("Mango");
//Agregar un elemento al inicio del array
frutas.unshift("Fresa");
//Eliminar el ultimo elemento del array
frutas.pop();
//Eliminar el primer elemento del array
frutas.shift();
//Eliminar un elemento en una posicion especifica
frutas.splice(1, 1);
//Eliminar un elemento en una posicion especifica y agregar un nuevo elemento
frutas.splice(1, 1, "Uva");
//Concatenar dos arrays
var frutas2 = ["Pera", "Kiwi"];
frutas = frutas.concat(frutas2);
console.log(frutas);
// [Manzana, Uva, Sandia, Pera, Kiwi]
//Ordenar un array
console.log(frutas.sort());
//[Kiwi, Manzana, Pera, Sandia, Uva]
//Invertir un array
console.log(frutas.reverse());
//[Uva, Sandia, Pera, Manzana, Kiwi]
//Buscar un elemento en un array (devuelve la posicion)
console.log(frutas.indexOf("Uva"));
//Buscar un elemento en un array (devuelve true o false)
console.log(frutas.includes("Uva"));
//cortar un array
console.log(frutas.slice(1, 3));
// [Sandia, Pera] (no incluye el ultimo elemento)

//Curiosidad, los strings tambien pueden ser tratados como arrays
var texto = "Hola, soy un texto";
console.log(texto[4]);

//Callback
// Es una función que se pasa como argumento a otra función

function calcular_descuento(precio, descuento){
  return precio - (precio * descuento);
}

function comprar(producto = "", precio = 0,  funcioncita){
  if(producto === "manzana"){
    return funcioncita(precio, 0.1);
  } else {
    return precio;
  }
}

console.log(comprar("manzana", 100, calcular_descuento));

//[Kiwi, Manzana, Pera, Sandia, Uva]
//filtrar un array
console.log(frutas.filter(
  (fruta) => fruta.length > 4)
);
//otro ejemplo de filter
console.log(frutas.filter(
  fruta => fruta.includes("a")
));

/*
  Ejercicios de metodos de arrays
  1. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros.
  2. Crea una función que reciba un array de numeros y devuelva el promedio de todos los numeros.
  3. Crea una función que reciba un array de numeros y devuelva el numero mayor.
  4. Crea una función que reciba un array de numeros y devuelva el numero menor.
  5. Crea una función que reciba un array de numeros y devuelva un array con los numeros pares.
  6. Crea una función que reciba un array de numeros y devuelva un array con los numeros impares.
  7. Crea una función que reciba un array de ciudades y devuelva un array con las ciudades que empiezan con la letra "M".
  8. Crea una función que reciba un array de nombres y verifique si el nombre "Juan" se encuentra en el array y devuelva su posicion.
*/

//Ciclos (Loops)
/*
  Los ciclos nos permiten repetir un bloque de codigo
  mientras se cumpla una condicion
*/

let carros = ["Toyota", "Nissan", "Chevrolet", "Ford"];
//For
for(let i = 0; i < carros.length; i++){
  console.log(carros[i]);
}

//While
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  if(i === 3){
    break;
  }
  i++;
}

//Do while
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while(j < 0);

//For of (Especial para recorrer arrays)
for(let carro of carros){
  console.log(carro);
}

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20
}

//For in (Especial para recorrer objetos)
for(let propiedad in persona){
  console.log(persona[propiedad]);
}

let comidas = [
  ["Hamburguesa", "Pizza", "Tacos"],
  ["Sushi", "Ramen", "Gyoza"],
  ["Pasta", "Lasagna", "Ravioli"]
];

for(let comida of comidas){
  for(let platillo of comida){
    console.log(platillo);
  }
}

let compra = [
  {
    producto: "Manzana",
    precio: 1.5,
    tipos: ["Golden", "Red", "Green"],
    cantidad: 10
  },
  {
    producto: "Pera",
    precio: 2.5,
    tipos: ["Bartlett", "Anjou", "Bosc"],
    cantidad: 5
  }
]

/*
  Ejercicios de ciclos
  1. Crea un ciclo que imprima los numeros del 1 al 100.
  2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
  3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
  4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/

//1
for(let i = 1; i <= 100; i++){
  console.log(i);
}

//2
for(let producto of compra){
  for(let propiedad in producto){
    if (Array.isArray(producto[propiedad])){
      for(let tipo of producto[propiedad]){
        console.log(tipo);
      }
    } else {
      console.log(producto[propiedad]);
    }
  }
}

//3
let contar1 = false;
for(let i = 0; i <= 100; i += 2){
  if(contar1){
    console.log(i);
  }
  contar1 = !contar1;
}

//4
let resultado_anterior = 0;
let resultado_actual = 1;
for(let i = 0; i < 15; i++){
  console.log(resultado_actual);
  let temporal = resultado_actual;
  resultado_actual = resultado_anterior + resultado_actual;
  resultado_anterior = temporal;
}

//Programación orientada a objetos
/*
  Un objeto puede contener propiedades o metodos
  Una propiedad es una caracteristica del objeto (color, tamaño, etc.)
  Un metodo es una funcion del objeto (correr, saltar, etc.)
*/

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2021,
  color: "Rojo",
  encender: function(){
    return "El carro está encendido";
  },
  apagar: () => {
    return "El carro está apagado";
  }
}

console.log(carro.encender());

//Clases
/*
  Las clases son plantillas para crear objetos
  Las clases pueden tener propiedades y metodos
*/

class Personaje {
  constructor(nombre, vida, ataque){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  decirInformacion(){
    return `Hola soy, ${this.nombre}, tengo ${this.vida} de vida y mi ataque es de ${this.ataque}`;
  }
}

let personaje1 = new Personaje("Gandalf", 100, 50);
let personaje2 = new Personaje("Frodo", 50, 20);
let personaje3 = new Personaje("Aragorn", 150, 70);

console.log(personaje1.decirInformacion());
console.log(personaje2.decirInformacion());
console.log(personaje3.decirInformacion());

//Herencia
/*
  La herencia nos permite crear una clase a partir de otra clase
*/
class Mago extends Personaje {
  constructor(nombre, vida, ataque, magia){
    super(nombre, vida, ataque);
    this.magia = magia;
  }

  lanzarHechizo(){
    return `${this.nombre} lanza un hechizo de ${this.magia}`;
  }
}

let mago1 = new Mago("Gandalf", 100, 50, "Fuego");
console.log(mago1.lanzarHechizo());

/*
  Realiza un videojuego utilizando clases y herencia.
  Este videojuego debe tener las siguientes clases:
  - Personaje
    - Propiedades: nombre, vida, ataque, defensa, velocidad
    - Metodos: Atacar, Saludar
  - Mago
    - Propiedades: hechizos (array de hechizos, cada hechizo tiene un nombre y un daño)
    ejemplo de hechizo: {nombre: "Fuego", daño: 50}
    - Metodos: Lanzar hechizo (seleccionar un hechizo aleatoriamente)
  - Guerrero
    - Propiedades: armas (array de armas, cada arma tiene un nombre y un daño)
    - Metodos: Atacar con arma (seleccionar un arma aleatoriamente)
    ejemplo de arma: {nombre: "Espada", daño: 30}
  - Arquero
    - Propiedades: flechas (array de flechas)
    - Metodos: Disparar flecha

  Debes de crear 5 personajes, 2 magos, 2 guerreros y 1 arquero.
  Cada personaje debe de tener una vida, un ataque diferente, una defensa, velocidad aleatoria.

  Crea un loop que permita a cada personaje atacar a otro personaje.
  Al momento de realizar un ataque, el personaje que fue atacado debe de defenderse.

  Cada vez que un personaje ataque a otro, se debe de imprimir el nombre del personaje que ataca,

  Para calcular el daño que un personaje recibe se debe utilizar la siguiente formula:
  Daño = (%Ataque del atacante) - (%Defensa del atacado)

  Nota: El daño no puede ser menor a 0, y el ataque y defensa es un numero aleatorio entre
  0 y el valor de ataque o defensa del personaje.

  Cada vez que un personaje ataque a otro, se debe de imprimir el daño que recibe el personaje atacado
  y quien ataca y quien es el atacado.
  
  Cuando un personaje ataca a otro, cada personaje debe atacar una vez al menos (Rondas),
  sin embargo, el orden de cada ronda se determina aleatoriamente imprimiendo un numero
  entre 0 y su velocidad.

  Cuando la vida de un personaje llega a 0, se debe de imprimir que el personaje ha muerto.
  y no puede seguir atacando.

  Al final solo debe de quedar un personaje en pie.

  Y debes imprimir un mensaje diciendo quien ha ganado.

  Cada personaje realizara una acción aleatoria, es decir. Aleatoriamente puede atacar (de forma normal),
  atacar con un hechizo o atacar con un arma. (Según el tipo de personaje).

  Además, a quien ataca también se debe de seleccionar aleatoriamente.

  Puedes utilizar metodos como Math.random() para seleccionar aleatoriamente un numero.

  Math.random devuelve un numero entre 0 y 1, si quieres un numero entre 0 y 10, debes de multiplicar
  el resultado por 11.

  Math.floor() redondea un numero decimal hacia abajo. Es importante porque Math.random() devuelve
  numeros decimales.

  Ejemplo:
  Math.floor(Math.random() * 10) //Devuelve un numero entre 0 y 9

  Opcional:
  - Que cada personaje tenga una habilidad especial que se pueda activar una vez por juego.
  - Que cada personaje tenga una probabilidad de esquivar un ataque.
  - Que cada personaje pueda tener items, estos pueden aumentar sus estadisticas o incluso curar al personaje


  Fecha de entrega: 04/11/2024
*/

//Mensajes de consola
console.log("Hola, soy un mensaje de consola");
console.warn("Hola, soy un mensaje de advertencia");
console.error("Hola, soy un mensaje de error");


/*

  1. Crea un juego de piedra papel o tijera utilizando
  funciones y ciclos.

  El juego debe permitir al usuario seleccionar una opcion
  y la computadora seleccionara una opcion aleatoria.

  Las opciones son:
  - Piedra
  - Papel
  - Tijera

  Las reglas son:
  - La piedra aplasta la tijera
  - La tijera corta el papel
  - El papel envuelve la piedra

  El juego debe de imprimir quien gano y si el usuario
  desea seguir jugando.

  El juego debe de terminar cuando el usuario seleccione
  que no desea seguir jugando.

  Ademas debes de tener un contador que indique cuantas
  partidas se han jugado, cuantas ha ganado el usuario
  y cuantas la computadora.

  Puedes utilizar la funcion prompt() para obtener la
  seleccion del usuario.

  2. Crea un juego de adivinar un numero aleatorio
  entre 1 y 100.

  El juego debe de permitir al usuario ingresar un numero
  y la computadora debe de generar un numero aleatorio
  entre 1 y 100.

  El juego debe de imprimir si el numero ingresado por
  el usuario es mayor, menor o igual al numero generado
  por la computadora.

  El juego debe de terminar cuando el usuario adivine
  el numero.

  Ademas debes de tener un contador que se reste uno cada
  vez que el usuario ingrese un numero.

  El usuario debe de tener un maximo de 6 intentos para
  adivinar el numero.

  3. Crea un programa orientado a objetos que sea un gestor
  de tareas.

  El programa debe de tener las siguientes clases:
  - Tarea
    - Propiedades: nombre, descripcion, fecha, completada

  - ListaTareas
    - Propiedades: tareas (array de tareas)
    - Metodos: Agregar tarea(tarea), Completar tarea(tarea), Eliminar tarea(tarea), 
    ver tareas()

  El programa debe de permitir al usuario agregar tareas,
  completar tareas y eliminar tareas. Ademas debe de permitir
  al usuario ver todas las tareas. 

  El programa debe de tener un menu que permita al usuario
  seleccionar una opcion.

  El programa debe de terminar cuando el usuario seleccione
  salir.

  debes usar alert() y prompt() para interactuar con el usuario.


  Fecha de entrega: 14/11/2024

  */


