/***************************************************************************************************************
 *
 *   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
 *
 *   Entrada : inicio, fin
 *
 *
 *   Salida  : inicio², (inicio+1)², ..... (fin)²
 *
 *   Notas: Emplearemos la forma "clasica" de hacerlo.
 *         ¿Cómo podemos hacerlo empleando arrays haciendo uso del método map?
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

let inicio = parseInt(pedirDato("Inicio ?", "entero"));
let fin = parseInt(pedirDato("Fin ?", "entero"));

let msg = "";
for (i = inicio; i <= fin; i++) {
  msg += i != fin ? `${Math.pow(i, 2)}, ` : `${Math.pow(i, 2)}`;
}
console.log(msg);

// Con Arrays
const numeros = Array.from({ length: fin - inicio + 1 }, (el, i) =>
  Math.pow(i + inicio, 2)
);
console.log(numeros.join(", "));
