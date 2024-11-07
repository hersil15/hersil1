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

let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let city_array = ["Madrid", "Buenos Aires", "Ciudad de México", "Lima", "Mérida"];
let name_array = ["Pepito", "José", "Juan", "José"];

// 1
let sum = 0;
num_array.forEach(element => { sum += element });
console.log(sum);

// 2
let length = num_array.length;
console.log(sum / length);

// 3
let sorted_array = num_array.sort();
let largest_element = sorted_array[sorted_array.length - 1];
console.log(largest_element);

// 4
let smaller_element = sorted_array[0];
console.log(smaller_element);

// 5
let even_array = [];
num_array.forEach(element => {
  if (element % 2 == 0) {
    even_array.push(element)
  }
});
console.log(even_array);

// 6
let odd_array = [];
num_array.forEach(element => {
  if (element % 2 != 0) {
    odd_array.push(element)
  }
});
console.log(odd_array);

// 7
console.log(city_array.filter(city => city.startsWith("M")));

// 8
console.log(name_array.indexOf("Juan"));