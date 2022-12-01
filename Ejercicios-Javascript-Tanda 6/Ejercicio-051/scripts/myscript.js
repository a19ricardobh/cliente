/***************************************************************************************************************
 *
 *   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
 *             aleatoriamente entre 1 y 10.
 *
 *   Entrada : n
 *
 *
 *   Salida  : Los elementos pares del array son: x1, x2, x3, ...
 *             Los elementos impares del array son: x1, x2, x3, ...
 *             La suma de los elementos pares del array es: XXXX
 *             La suma de los elementos impares del array es: YYYY
 *
 ***************************************************************************************************************/
const n = 6;
/* const array = [];
let i = n;
while (i > 0) {
  array.push(parseInt(Math.random() * 100));
  i--;
}
 */
const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());
const array = Array.from({ length: n }, () => aleatorio(0, 100));
const matriz = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => aleatorio(0, 100))
);

console.log(array);

console.log(array.filter((value) => value % 2 == 0));
console.log(array.filter((value) => value % 2 != 0));
console.log(
  array.filter((value) => value % 2 == 0).reduce((acc, val) => (acc += val))
);
console.log(
  array.filter((value) => value % 2 != 0).reduce((acc, val) => (acc += val))
);

console.log(matriz);
