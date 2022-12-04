/***************************************************************************************************************
 *
 *   Objetivo: Factorizar un numero entero
 *
 *
 *   Entrada : n
 *
 *
 *   Salida  : Array con los divisores de n
 *
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

function isPrime(n) {
  if (n === 1 || n === 2) return true;
  let impares = Array.from(
    { length: parseInt(Math.sqrt(n)) },
    (el, i) => 2 * i + 1
  ).slice(1);
  impares.unshift(2);
  for (let i = 0; i < impares.length; i++) {
    if (n % impares[i] === 0) return false;
  }
  return true;
}

function isPrime(n) {
  if (n === 1 || n === 2) return true;
  let impares = Array.from(
    { length: parseInt(Math.sqrt(n)) },
    (el, i) => 2 * i + 1
  ).slice(1);
  impares.unshift(2);
  for (let i = 0; i < impares.length; i++) {
    if (n % impares[i] === 0) return false;
  }
  return true;
}

function obtenerFactores(n) {
  const factores = [];
  let numero = n;
  for (i = 2; i < n; i++) {
    if (isPrime(i)) {
      while (numero % i == 0) {
        factores.push(i);
        numero /= i;
      }
    }
  }
  return factores;
}

let numero;
do {
  numero = parseInt(pedirDato("Numero entero ?", "entero"));
} while (numero < 1);

console.log(obtenerFactores(numero));
