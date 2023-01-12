/***************************************************************************************************************
 *
 *   Objetivo: n es de Harshad si es divisible por la suma de sus dígitos
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

function isHarshad(numero) {
  return (
    numero %
      numero
        .toString()
        .split("")
        .reduce((anterior, actual) => anterior + parseInt(actual), 0) ==
    0
  );
}

let numero = parseInt(pedirDato("Numero entero ?", "entero"));
msg = isHarshad(numero)
  ? `El numero ${numero} es de Harshad`
  : `El numero ${numero} no es de Harshad`;
console.log(msg);
