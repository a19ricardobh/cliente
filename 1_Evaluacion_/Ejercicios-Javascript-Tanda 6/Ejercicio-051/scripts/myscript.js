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

function pedirDato(msg, tipo) {
  let centinela;
  let dato;
  do {
    dato = prompt(msg);
    if (tipo == "cadena") centinela = isNaN(dato) ? true : false;
    if (tipo == "entero")
      centinela =
        !isNaN(dato) && Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "flotante")
      centinela =
        !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
  } while (!centinela);
  return dato;
}

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

let longitud = parseInt(pedirDato("Longitud ? ", "entero"));

const array = Array.from({ length: longitud }, () => aleatorio(1, 10));

console.log(`Los elementos del array son ${array.join(", ")}`);
console.log(
  `Los elementos pares del array son ${array
    .filter((el) => el % 2 == 0)
    .join(", ")}`
);
console.log(
  `Los elementos impares del array son ${array
    .filter((el) => el % 2 != 0)
    .join(", ")}`
);
console.log(
  `La suma de los elementos pares del array son ${array
    .filter((el) => el % 2 == 0)
    .reduce((anterior, actual) => anterior + actual, 0)}`
);
console.log(
  `La suma de los elementos impares del array son ${array
    .filter((el) => el % 2 != 0)
    .reduce((anterior, actual) => anterior + actual, 0)}`
);
