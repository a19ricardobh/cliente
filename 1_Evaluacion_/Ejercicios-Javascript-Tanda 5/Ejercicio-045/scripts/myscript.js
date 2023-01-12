/***************************************************************************************************************
 *
 *   Objetivo: Solicita la fecha de nacimiento de una persona (dia/mes/año) y calcule el número de la suerte
 *             El número de la suerte se calcula sumando las cifras obtenidas en la suma
 *             Por ejemplo: si la fecha de nacimiento es el 12/07/1980
 *                                  12/07/1980 = 1999
 *                                  1+9+9+9 = 28
 *                                  2+8 = 10
 *                                  1+0 = 1   <---- Número de la suerte
 *
 *   Entrada : dia/mes/anho
 *
 *
 *   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
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

let dia = parseInt(pedirDato("Dime el dia del mes", "entero"));
let mes = parseInt(pedirDato("Dime el el mes", "entero"));
let anho = parseInt(pedirDato("Dime el año", "entero"));

// Recursiva
function reducirCadena(cadena) {
  if (cadena.length == 1) return cadena[0];
  else
    return reducirCadena(
      cadena
        .split("")
        .map((el) => parseInt(el))
        .reduce((anterior, actual) => anterior + actual)
        .toString()
    );
}
console.log(reducirCadena((dia + mes + anho).toString()));

// Iterativa
function reducirCadena(cadena) {
  while (cadena.length !== 1) {
    cadena = cadena
      .split("")
      .map((el) => parseInt(el))
      .reduce((anterior, actual) => anterior + actual)
      .toString();
  }
  return cadena[0];
}
console.log(reducirCadena((dia + mes + anho).toString()));
