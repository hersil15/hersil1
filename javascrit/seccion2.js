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
if(true){
  if(true){
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
function saludar(){
  console.log("Hola, soy una función");
}

//Llamamos a la función (Utilizamos la función)
saludar();
saludar();
saludar();

//Funcion con parametros
function saludarPersona(nombre = "Desconocido", edad = 0){
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
function sumar(numero1 = 0, numero2 = 0){
  return numero1 + numero2;
}

console.log(sumar(10, 20));
var resultado = sumar(30, 40);

/*
  Ejercicios de funciones con retorno
*/

function calcularIMC(peso = 0, altura = 0){
  return peso / (altura * altura);
}

console.log(calcularIMC(70, 1.70)); //24.221453287197235

function calcularAreaTriangulo(base = 0, altura = 0){
  (base * altura) / 2;
}

console.log(calcularAreaTriangulo(10, 5)); //undefined

function calcularAreaCirculo(radio = 0){
  if( radio <= 0){
    return "El radio debe ser mayor a 0";
  } else if( typeof radio !== "number"){
    return "El radio debe ser un número";
  } else {
    if( radio <= 5){
      return "El radio debe ser mayor a 5";
    }
    return PI * (radio * radio);
  }
}

console.log(calcularAreaCirculo("5.515"));

function salirFinDeSemana(tiempo = false, dinero = false, ganas = false){
  if(tiempo && dinero && ganas){
    console.log("Saldré a divertirme");
  } if (tiempo && dinero){
    return "Saldré desganado";
  } if(tiempo){
    if(ganas){
      console.log("Saldre a hacer ejecicio");
    }
    return "Saldré a matar el tiempo";
  }
  return "No saldré";
}

console.log(salirFinDeSemana(true,true,true))
//Funciones flecha (Arrow functions) también son conocidas como funciones anónimas
//Son una forma de escribir funciones de manera más corta y pueden ser
//asignadas a una variable

var Flecha = (numero1 = 0, numero2 = 0) => {return numero1 * numero2};


console.log(funcionFlecha(10, 30));

function suma(numero1, numero2){ 
  return numero1 + numero2;
}

console.log(suma(10, 20)); //30

function resta(numero1, numero2){
  console.log(numero1 - numero2); //-10
}

console.log(resta(10, 20)); //undefined

function hallarAreaTriangulo(base, altura){
  if(base <= 0 || altura <= 0){
    return "Los valores deben ser mayores a 0";
  } else if(base === altura){
    return "La base y la altura no pueden ser iguales";
  } else {
    console.log((base * altura) / 2) //25
  }
}

console.log(hallarAreaTriangulo(10, 5)); // undefined

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

console.log(hallarAreaCirculo(2)); //El radio debe ser mayor a 5