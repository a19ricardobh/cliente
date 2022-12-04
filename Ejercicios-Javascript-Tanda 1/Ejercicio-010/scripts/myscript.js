/***************************************************************************************************************
 *
 *   Objetivo: Solicitar al usuario que visita la página su edad y mostrar un mensaje en función de ella
 *
 *
 *   Entrada : edad
 *
 *
 *   Salida  : Si la edad es menor que 30 el mensaje debe ser: ! Ponte a trabajar !
 *             Si la edad está entre 30 y 64 el mensaje debe ser: ! Que ganas tengo de jubilarme !
 *             Si la edad es superior a 65 el mensaje debe ser: ! Descansa un poco !
 *
 *   Notas   : Debemos comprobar si:
 *                   - La edad es un número entero mayor que 0 (indicaremos el error)
 *                   - La edad no puede ser superior a 120 (indicaremos el error)
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

let edad = parseInt(pedirDato("Edad", "entero"));

let msg;
switch (true) {
  case edad > 0 && edad < 30:
    msg = "! Ponte a trabajar !";
    break;
  case edad >= 30 && edad < 64:
    msg = "! Que ganas tengo de jubilarme !";
    break;
  case edad >= 64 && edad <= 120:
    msg = "! Descanda un poco !";
    break;
  default:
    msg = " Estas seguro de tu edad ?";
}

console.log(msg);
