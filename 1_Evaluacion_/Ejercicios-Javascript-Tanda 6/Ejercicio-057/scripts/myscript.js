/***************************************************************************************************************
 *
 *   Objetivo: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
 *
 *                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
 *
 *             n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
 *
 *                           4! = 4 * 3 * 2 * 1
 *
 *             Hay que calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
 *             consecutivos sea menor que la precision solicitada
 *
 *   Entrada : La precision (p. ej. 0,0001)
 *
 *
 *   Salida  : El valor de e con la precisión indicada
 *
 *
 ***************************************************************************************************************/

// Recursivamente
function factorialR(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialR(n - 1);
  }
}

function factorialIter(n) {
  if ((n === 0) | (n === 1)) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

let numeroE = 1;
let i = 1;
let termino1 = 1 / factorialR(i);
let termino2 = 1 / factorialR(i + 1);
while (termino1 - termino2 > 0.0001) {
  numeroE += termino1 + termino2;
  i += 2;
  termino1 = 1 / factorialR(i);
  termino2 = 1 / factorialR(i + 1);
}

console.log(`Termino1: ${termino1}`);
console.log(`Termino2: ${termino2}`);
console.log(`Numero E: ${numeroE}. Por libreria ${Math.E}`);
