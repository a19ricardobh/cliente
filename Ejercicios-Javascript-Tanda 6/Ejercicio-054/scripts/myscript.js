/***************************************************************************************************************
 *
 *   Objetivo: Adivina un número. Escojer aleatoriamente un número entero entre 1 y 100. Al abrir la página web
 *             debe ir solicitando números entre 1 y 100 hasta que el usuario acierte el número.
 *             Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
 *             no teniendo en cuenta intentos en los que se introduce un dato incorrecto.
 *
 *   Entrada : un número entero (en cada intento)
 *
 *   Salida  : ! Has acertado ! Has necesitado XX intentos
 *             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
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

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

let intentos = 1;
let salir = false;
let nAleatorio = aleatorio(1, 100);
do {
  let opcion = parseInt(pedirDato(`Intento ${intentos}`, "entero"));
  switch (true) {
    case opcion > nAleatorio:
      salida = `<p>Intento ${intentos}: ! Has fallado ! El número que tienes que adivinar es menor</p>`;
      intentos++;
      break;
    case opcion < nAleatorio:
      salida = `<p>Intento ${intentos}: ! Has fallado ! El número que tienes que adivinar es mayor</p>`;
      intentos++;
      break;
    default:
      salida = `<p>Intento ${intentos}: ! Has acertado. Has necesitado ${intentos} intentos</p>`;
      salir = true;
      break;
  }
  document.querySelector("#resultado").innerHTML += salida;
} while (!salir);
