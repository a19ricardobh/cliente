/***************************************************************************************************************
 *
 *   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la consola el resultado de
 *             sumarlos, restarlos, multiplicarlos y dividirlos
 *
 *   Entrada : Dos números enteros: numero1, numero2
 *
 *
 *   Salida  : La suma de numero1 y numero2 es: numero1+numero2
 *             La resta de numero1 y numero2 es: numero1-numero2
 *             El producto de numero1 y numero2 es: numero1*numero2
 *             La division de numero1 entre numero2 es: numero1/numero2
 *
 *   Notas   : Ten en cuenta que:
 *                   - la división entre los números puede dar un número con muchos decimales
 *                     ¿Cómo podríamos limitar el número de decimales que se mostrarán?
 *                   - ¿Qué pasaría en la division si numero2=0 ?
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

let numero1 = parseInt(pedirDato("Numero 1", "entero"));
let numero2 = parseInt(pedirDato("Numero 2", "entero"));

console.log(`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2}`);
console.log(`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`);
console.log(`El producto de ${numero1} y ${numero2} es: ${numero1 * numero2}`);

msg =
  numero2 != 0
    ? `La division de ${numero1} entre ${numero2} es: ${(
        numero1 / numero2
      ).toFixed(2)}`
    : `No podemos dividir ${numero1} por ${numero2}`;
console.log(msg);
