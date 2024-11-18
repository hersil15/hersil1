/**
 * @function calcular
 * @param {string} operacion
 * @description Calcula la operación
 * @returns {string} - Resultado de la operación
 */
function calcular(operacion) {
  return (operacion = eval(operacion));
}

/**
 * @function errores
 * @param {error} error
 * @description Muestra un mensaje de error
 */
function errores(error) {
  if (error === "no has ingresado una operacion") {
    alert(error);
  } else {
    alert("Operacion no valida");
  }
}

/**
 * @function ejecutar
 * @description Ejecuta la calculadora
 */
function ejecutar() {
  do {
    calculadora();
    var continuar = confirm("Desea realizar otra operacion?");
  } while (continuar);
}

/**
 * @function calculadora
 * @description Función principal de la calculadora
 * @returns {void}
 */
function calculadora() {
  operacion = prompt("ingrese una operacion");
  try {
    operacion = calcular(operacion);
    if (!operacion) {
      throw "no has ingresado una operacion";
    }
    alert(operacion);
  } catch (error) {
    errores(error);
  }
}

ejecutar();
