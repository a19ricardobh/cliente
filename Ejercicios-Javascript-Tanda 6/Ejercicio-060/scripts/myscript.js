/***************************************************************************************************************
 *
 *   Objetivo: Determinar si in número es perfecto o no a través de una función
 *             Un número es perfecto cuando el número es igual a la suma de sus divisores.
 *
 *   Entrada : entero n
 *
 *
 *   Salida  : El número n (es|no es) perfecto !
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

const divisores = (n) =>
  Array.from({ length: n - 1 }, (el, i) => i + 1).filter((el) => n % el == 0);

function isPerfect(n) {
  return divisores(n).reduce((anterior, actual) => anterior + actual, 0) == n;
}

let numero;
do {
  numero = parseInt(pedirDato("Numero entero ?", "entero"));
} while (numero < 1);

resultado = isPerfect(numero)
  ? `El numero ${numero} es perfecto`
  : `El numero ${numero} no es perfecto`;
console.log(resultado);
