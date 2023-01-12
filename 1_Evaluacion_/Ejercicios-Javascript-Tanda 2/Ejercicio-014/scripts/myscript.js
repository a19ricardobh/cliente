/***************************************************************************************************************
 *
 *   Objetivo: Pedimos reiteradamente cadenas al usuario hasta que la cadena de texto introducida es "cancelar".
 *
 *
 *   Entrada : cadenas de texto
 *
 *
 *   Salida  : Cada cadena introducida se muestra en un párrafo del documento HTML
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

const $contenedor = document.querySelector("#contenedor");
let msg = pedirDato("Cadena?", "cadena");
while (msg != "cancelar") {
  $contenedor.innerHTML += `<h3>${msg}</h3>`;
  msg = pedirDato("Cadena?", "cadena");
}
