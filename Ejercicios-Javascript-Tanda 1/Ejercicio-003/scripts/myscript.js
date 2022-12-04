/***************************************************************************************************************
 *
 *   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
 *             mediante una ventana de alerta. Debemos comprobar que el valor introducido es una cadena
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
document.querySelector(
  "#contenedor"
).innerHTML = `<h1>Bienvenido a mi pagina, ${nombre}</h1>`;
