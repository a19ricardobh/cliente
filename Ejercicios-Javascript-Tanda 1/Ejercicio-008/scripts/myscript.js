/***************************************************************************************************************
 *
 *   Objetivo: Determinar si un número entero introducido es par o impar
 *             Crear para ello una función
 *
 *   Entrada : n
 *
 *   Salida  : El número n es (par|impar)
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

let numero = parseInt(pedirDato("Numero entero", "entero"));

// Funcion expresada
const isPar = (num) => num % 2 == 0;

let msg = isPar(numero)
  ? `El numero ${numero} es par`
  : `El numero ${numero} es impar`;
console.log(msg);
