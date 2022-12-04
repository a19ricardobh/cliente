/***************************************************************************************************************
 *
 *   Objetivo: Formula de Legendre  ep(n!)=[n/p]+[n/p²]+[n/p³]+[n/p⁴]+...
 *
 *
 *   Entrada : p y n, dos enteros positivos
 *
 *
 *   Salida  : Si p>n, devuelve 0.
 *             e2(27!)=[27/2]+[27/2²]+[27/2³]+[27/2⁴]=13+6+3+1=23
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

function legendre(n, p) {
  if (p > n) {
    return 0;
  }

  let i = 1;
  let resultado = 0;
  while (Math.pow(p, i) <= n) {
    resultado += parseInt(n / Math.pow(p, i));
    i++;
  }
  return resultado;
}

console.log(legendre(100, 5));
console.log(legendre(128, 2));
console.log(legendre(50, 3));
