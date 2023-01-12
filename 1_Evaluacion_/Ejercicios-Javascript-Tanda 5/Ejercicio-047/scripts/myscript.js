/***************************************************************************************************************
 *
 *   Objetivo: Devolver el salto mas largo entre elementos de la version ordenada de un array
 *
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

const aleatorio = (min, max) => Math.floor(min + (max - min) * Math.random());

function ordenacion(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}

let n = parseInt(pedirDato("Longitud de array?", "entero"));
const array = Array.from({ length: n }, () => aleatorio(1, 100));

array.sort(ordenacion);

const diferencias = array.map((el, i, vector) =>
  i == 0 ? 0 : el - vector[i - 1]
);
console.log(
  `El salto más grande entre los elementos \n\n ${array.join(
    ", "
  )} es ${Math.max(...diferencias)}`
);
