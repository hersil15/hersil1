
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

//Ejercicios de metodos de strings
//1. Crea una función que reciba un string y devuelva la cantidad de letras que tiene.
//2. Crea una función que reciba un string y devuelva la cantidad de palabras que tiene.
//3. Crea una función que reciba un string y devuelva el string invertido. (Hola -> aloH) (Utiliza recursividad)
//4. Verifica si un string es un palindromo (se lee igual de izquierda a derecha que de derecha a izquierda)


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

