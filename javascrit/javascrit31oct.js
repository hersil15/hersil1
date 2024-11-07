let carros = ["Toyota", "Nissan", "Chevrolet", "Ford"];
//For
for (let i = 0; i < carros.length; i++){
  console.log(carros[i]);}

  //While
let i = 0;
while(i < carros.length){
  console.log(carros[i]);
  i++;
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

/*
Ejercicios de ciclos
  1. Crea un ciclo que imprima los numeros del 1 al 100.
  2. Crea un ciclo que permita imprimir cada uno de los valores de la variable compra.
  3. Crea un ciclo que imprima los numeros pares del 0 al 100 de dos en dos. (2, 6, 10, 14, 18, ...)
  4. Realiza el ejercicio de Fibonacci utilizando un ciclo. (Debes imprimir solo los primeros 15 valores)
*/
//ejercicio 1

for(let i = 0; i <= 100; i = i + 1 ){
  console.log(i);
}
for(let i = 0; i <= 100; i++){
  console.log(i);
}
for( let i = 100; i >=0; i--){
  console.log(i)
}
//ejercicio 2

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
for(let propiedad in compra){
  console.log(compra[propiedad]);
}

//Ejercicio 3

for (let i = 2 ; i <= 100; i = i + 4) {
  console.log(i);
}


//ejercico 4

function fibonacci(numero) {
  let a = 0, b = 1, c;
  for (let i = 0; i < numero; i++) {
    console.log(a);
    c = a;
    a = b;
    b = c + b;
  }
}
console.log(fibonacci(15));


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
  Ejercicios de ciclos 2
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
let contar = false;
for(let i = 0; i <= 100; i += 2){
  if(contar){
    console.log(i);
  }
  contar = !contar;
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