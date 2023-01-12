/***************************************************************************************************************
 *
 *   Objetivo: Solicita un texto y una palabra.
 *
 *
 *   Entrada : cadenas de texto: texto, palabra
 *
 *
 *   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
 *
 *   Notas: Métodos del objeto String
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

let cadena = pedirDato("Escribe una cadena de texto", "cadena");
let palabra = pedirDato("Escribe una palabra", "cadena");
const posiciones = [];
let pos = cadena.indexOf(palabra, 0);
while (pos != -1) {
  posiciones.push(pos);
  pos = cadena.indexOf(palabra, pos + palabra.length);
}

let msg = posiciones.length
  ? `La palabra ${palabra} aparece en las posiciones ${posiciones.join(", ")}`
  : `La palabra ${palabra} no aparece en la cadena`;

console.log(msg);
