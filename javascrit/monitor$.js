function monitordolar(monitor, bolivares, oper) {
 var result
  if  (oper === "*")
    result = monitor * bolivares;
  return result
}

console.log(monitordolar(50.85, 0.5, "*"))