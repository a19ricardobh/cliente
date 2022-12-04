/***************************************************************************************************************
 *
 *   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
 *             Crear tres funciones:
 *                1.- Devuelve un array con los elementos comunes en los arrays
 *                2.- Devuelve los elementos del primer array que no están en el segundo array
 *                3.- Devuelve los elementos del segundo array que no están en el primer array
 *
 *             Rellenar los arrays con númeos aleatorios entre -100 y 100
 *
 *   Entrada : La longitud del array (numero entero n)
 *
 *   Salida  : Los elementos del Array1
 *             Los elementos del Array2
 *             Los arrays tienen XX elementos comunes: .... (los elementos comunes separados por comas)
 *             Elementos del primer array no presentes en el segundo array: ...
 *             Elementos del segundo array no presentes en el primer array: ....
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

let entrada = parseInt(
  pedirDato("Introduzca un tamaño para las listas", "entero")
);
let lista1 = Array.from({ length: entrada }, () => aleatorio(-100, 100));
let lista2 = Array.from({ length: entrada }, () => aleatorio(-100, 100));

const elementosComunes = lista1.filter((el) => lista2.includes(el));
const elementosEnLista1NoLista2 = lista1.filter((el) => !lista2.includes(el));
const elementosEnLista2NoLista1 = lista2.filter((el) => !lista1.includes(el));

console.log(`lista 1: ${lista1}`);
console.log(`lista 2: ${lista2}`);
console.log(`Los elementos comunes son: ${elementosComunes}`);
console.log(
  `Los elementos de lista1 que no estan en lista2 son: ${elementosEnLista1NoLista2}`
);
console.log(
  `Los elementos de lista2 que no estan en lista1 son: ${elementosEnLista2NoLista1}`
);
