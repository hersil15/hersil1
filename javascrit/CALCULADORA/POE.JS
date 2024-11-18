let operacion = "";

/**
 * @function agregar
 * @description Agrega un caracter a la operación
 * @param {string} caracter
 * @returns {void}
 */
function agregar(caracter) {
  operacion += caracter;
  document.getElementById("calculo").value = operacion;
}

/**
 * @function reiniciar
 * @description Reinicia la operación
 * @returns {void}
 */
function reiniciar() {
  operacion = "";
  document.getElementById("calculo").value = operacion;
}

/**
 * @function borrar
 * @description Borra el último caracter de la operación
 * @returns {void}
 */
function borrar() {
  operacion = operacion.slice(0, -1);
  document.getElementById("calculo").value = operacion;
}

/**
 * @function calcular
 * @description Calcula la operación
 * @returns {void}
 */
function calcular() {
  operacion = eval(operacion);
  document.getElementById("calculo").value = operacion;
}

/**
 * @function calculadora
 * @description Función principal de la calculadora
 * @returns {void}
 */
function calculadora() {
  let valor = this.innerHTML;
  if (valor == "Reiniciar") {
    reiniciar();
  } else if (valor == "Borrar") {
    borrar();
  } else if (valor == "Calcular") {
    calcular();
  } else {
    agregar(valor);
  }
  console.log(valor);
}

/**
 * seleccionar todos los botones
 */
let botones = document.getElementsByTagName("button");

/**
 * Agregar un evento a cada botón
 */
for (let boton of botones) {
  boton.addEventListener("click", calculadora);
}
