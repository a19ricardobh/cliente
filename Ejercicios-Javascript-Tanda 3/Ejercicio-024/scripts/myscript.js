/***************************************************************************************************************
 *
 *   Objetivo: n es automorfico si su cuadrado termina en n
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

let numero = parseInt(pedirDato("Introduce un numero entero", "entero"));

// Una forma
console.log(
  Math.pow(numero, 2).toString().slice(-numero.toString().length) ==
    numero.toString()
    ? "Es automorfico"
    : "No es automorfico"
);

// Segunda forma MEJOR
console.log(
  Math.pow(numero, 2).toString().endsWith(numero)
    ? "Es automorfico"
    : "No es automorfico"
);
