/***************************************************************************************************************
 *
 *   Objetivo: Determinar si un número es o no primo empleando una función
 *
 *   Entrada : numero entero
 *
 *   Salida  : El numero n (es|no es) primo
 *
 *   Nota: Un número n es primo si sólo es divisible por 1 y por n
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

let numero;
do {
  numero = parseInt(pedirDato("Numero entero ?", "entero"));
} while (numero < 1);

let resultado = isPrime(numero)
  ? `El numero ${numero} es primo`
  : `El numero ${numero} no es primo`;
console.log(resultado);
