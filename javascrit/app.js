class Calculadora {
  constructor() {
      this.valorActual = '';
      this.valorPrevio = '';
      this.operador = '';
  }

  agregarNumero(numero) {
      this.valorActual = this.valorActual.toString() + numero.toString();
  }

  elegirOperador(operador) {
      if (this.valorActual === '') return;
      if (this.valorPrevio !== '') {
          this.calcular();
      }
      this.operador = operador;
      this.valorPrevio = this.valorActual;
      this.valorActual = '';
  }

  calcular() {
      let resultado;
      const prev = parseFloat(this.valorPrevio);
      const actual = parseFloat(this.valorActual);
      if (isNaN(prev) || isNaN(actual)) return;
      switch (this.operador) {
          case '+':
              resultado = prev + actual;
              break;
          case '-':
              resultado = prev - actual;
              break;
          case '*':
              resultado = prev * actual;
              break;
          case '/':
              resultado = prev / actual;
              break;
          default:
              return;
      }
      this.valorActual = resultado;
      this.operador = '';
      this.valorPrevio = '';
  }

  limpiar() {
      this.valorActual = '';
      this.valorPrevio = '';
      this.operador = '';
  }

  actualizarDisplay(display) {
      display.value = this.valorActual;
  }
}

// Uso de la clase Calculadora
const calculadora = new Calculadora();

const botonesNumeros = document.querySelectorAll('[data-numero]');
const botonesOperadores = document.querySelectorAll('[data-operador]');
const botonIgual = document.querySelector('[data-igual]');
const botonLimpiar = document.querySelector('[data-limpiar]');
const display = document.querySelector('[data-display]');

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => {
      calculadora.agregarNumero(boton.innerText);
      calculadora.actualizarDisplay(display);
  });
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => {
      calculadora.elegirOperador(boton.innerText);
      calculadora.actualizarDisplay(display);
  });
});

botonIgual.addEventListener('click', () => {
  calculadora.calcular();
  calculadora.actualizarDisplay(display);
});

botonLimpiar.addEventListener('click', () => {
  calculadora.limpiar();
  calculadora.actualizarDisplay(display);
});
