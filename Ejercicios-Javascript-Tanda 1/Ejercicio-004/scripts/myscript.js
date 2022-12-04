/***************************************************************************************************************
 *
 *   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
 *             Tenemos que comprobar que se introduce una cadena y un número entero
 *
 *
 *   Entrada : cadena de texto, numero: nombre, edad
 *
 *
 *   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
 *                       Tu nombre es .... y tienes .... años
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
let edad;
do {
  edad = parseInt(pedirDato("Edad?", "entero"));
} while (edad < 1);

console.log(`${nombre} tiene ${edad} años`);
