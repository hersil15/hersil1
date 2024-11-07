function contar(numero){
    if(numero >= 100){
    return;
    }
    console.log(numero);
    contar(numero + 1)
  }

  contar (0);

function cuentaregresiva(numero){
  if(numero >= 100){
    return;
  }
  console.log(numero);
  cuentaregresiva(numero - 1)
  }
  cuentaregresiva (100);

 