/***************************************************************************************************************
 *
 *   Objetivo: Imprimir en la consola de depuración la suma de los números enteros entre 1 y n, donde n es un dato
 *             solicitado al usuario. Comprobar si esa suma coincide con n*(n+1)/2
 *
 *   Entrada : n
 *
 *   Salida  : La suma de 1+2+3+...n es XXXX
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

const numeros = Array.from(
  { length: parseInt(pedirDato("Numero entero ?", "entero")) },
  (el, i) => i + 1
);
const suma = numeros.reduce((anterior, actual) => anterior + actual);

console.log(`La suma de ${numeros.join("+")} es ${suma}`);
