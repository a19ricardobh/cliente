/***************************************************************************************************************
 *
 *   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
 *             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
 *
 *   Entrada : n
 *
 *
 *   Salida  : el mayor, el menor y la media de los números del array
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

function crearArray(n) {
  const arraynum = [];
  for (i = 0; i < n; i++) {
    arraynum.push(aleatorio(1, 100));
  }
  return arraynum;
}

let n = parseInt(pedirDato("Longitud de array?", "entero"));
const array = crearArray(n);
// const array=Array.from({length:n},()=>aleatorio(1,100))

media =
  array.reduce((previo, actual) => previo + parseInt(actual), 0) / array.length;

console.log(Math.max(...arraynum));
console.log(Math.min(...arraynum));
console.log(media);
