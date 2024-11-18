/**
 * @class calculadora
 * @description Clase que representa una calculadora
 * @returns {void}
 */
class calculadora {
  /**
   * @constructor
   * @description Inicializa la operación
   * @returns {void}
   */
  constructor() {
    this.operacion = "";
  }

  /**
   * @function calcular
   * @description Calcula la operación
   * @returns {void}
   */
  calcular() {
    this.operacion = eval(this.operacion);
  }

  /**
   * @function calculadora
   * @description Función principal de la calculadora
   * @returns {void}
   */
  calculadora() {
    this.operacion = prompt("ingrese una operacion");
    try {
      this.calcular();
      if (!this.operacion) {
        throw "no has ingresado una operacion";
      }
      alert(this.operacion);
    } catch (error) {
      if (error === "no has ingresado una operacion") {
        alert(error);
      } else {
        alert("Operacion no valida");
      }
    }
  }
}

/**
 * Ejecución de la calculadora
 */
do {
  let calc = new calculadora();
  calc.calculadora();
  var continuar = confirm("Desea realizar otra operacion?");
} while (continuar);
