/***************************************************************************************************************
 *
 *   Objetivo: Cada numero de Perrin se obtiene sumando los numeros de dos y tres
 *             posiciones anteriores. Los tres primeros son (3,0,2)
 *
 *
 *   Entrada :
 *
 *
 *   Salida  : 3,0,2,3,2,5,5,7
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

function perrin(n) {
  switch (n) {
    case 0:
      return 3;
      break;
    case 1:
      return 0;
      break;
    case 2:
      return 2;
      break;
    default:
      return perrin(n - 2) + perrin(n - 3);
  }
}

let numero;
do {
  numero = parseInt(pedirDato("Que número Perrin quieres", "entero"));
} while (numero < 0);
console.log(`El numero Perrin ${perrin(numero)}`);
