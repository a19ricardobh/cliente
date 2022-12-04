/***************************************************************************************************************
 *
 *   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten
 *             guion, subrayado y espacios
 *
 *
 *
 *   Entrada : cadena
 *
 *
 *   Salida  : cadena sin . ! @ # $ % & \ * ( )
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

let cadena = pedirDato(
  "Introduce una cadena que tenga algún . ! @ # $ % &  * ( )",
  "cadena"
);
let resultado = cadena.toString();
".!@#$%&*()".split("").forEach((el) => {
  resultado = resultado.replaceAll(el, "");
});

console.log(`La cadena: \n\n${cadena}\n\nsin esos caracteres:\n\n${resultado}`);
