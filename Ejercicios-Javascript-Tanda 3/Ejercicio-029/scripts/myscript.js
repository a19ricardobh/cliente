/***************************************************************************************************************
 *
 *   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
 *
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
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

function pandigital(n) {
  let i = 0;
  let a = Array.from(n);

  while (i <= 9) {
    if (!a.includes(i.toString())) {
      return false;
    }
    i++;
  }
  return true;
}

let numero = parseInt(pedirDato("Numero entero ?", "entero")).toString();
//let digitos="0123456789".split("")
//digitos.every(el=>numero.split("").includes(el))

console.log(pandigital(numero));
