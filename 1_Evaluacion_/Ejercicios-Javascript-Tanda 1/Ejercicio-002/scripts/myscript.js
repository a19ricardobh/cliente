/***************************************************************************************************************
 *
 *   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
 *             en la consola del navegador
 *
 *
 *   Entrada : nombre
 *
 *
 *   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
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

let nombre = pedirDato("Nombre?", "cadena");
console.log(`Bienvenido a mi pagina, ${nombre}`);
