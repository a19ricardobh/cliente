/***************************************************************************************************************
 *
 *   Objetivo: Buscar el numero perdido en un array de n elementos.
 *             Están todos los enteros en el array menos uno
 *             Array desordenado
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/

function ordenacion(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function buscaPerdido(array) {
  array.sort(ordenacion);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] != array[i] + 1) {
      return array[i] + 1;
    }
  }
}

const array1 = [52, 58, 50, 54, 53, 51, 57, 55, 59];
const array2 = [3, 5, 8, 4, 2, 1, 7, 10, 9];

console.log(buscaPerdido(array1));
console.log(buscaPerdido(array2));

// Otra forma
const found = (array) =>
  array.find((el, i, vector) => vector[vector.indexOf(el) + 1] != el + 1) + 1;
console.log(found(array1));
console.log(found(array2));
