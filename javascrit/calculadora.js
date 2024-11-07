function calc(input1, input2, oper) {
  var result
  if (oper === "+") {
    result = input1 + input2;
  } else if (oper === "-") {
    result = input1 - input2;
  } else if (oper === "*") {
    result = input1 * input2;
  } else if (oper === "/") {
    result = input1 / input2;
  } else if (oper === "**") {
    result = input1 ** input2;
  } else if (oper === "%") {
    result = input1 % input2;
  } else {
    result = "Operador inválido"
  };
  return result
}
  console.log(calc(4, 7, "+"))
