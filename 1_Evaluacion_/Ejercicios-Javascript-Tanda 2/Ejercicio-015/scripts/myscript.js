/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 1 hasta
 *             ese numero. Realizarlo con los tres tipos de bucles.
 *
 *   Entrada : numero entero n
 *
 *
 *   Salida  : 2,4,6,....,n
 *
 *   Notas: La salida finalizará en n o n-1 dependiendo de si n es par o impar
 *
 *   Notas: Resolver inicialmente e ejercicio de forma "clasica". Trataremos de realizarlo con arrays:
 *          - ¿Como defenir un array con esos valores de forma rápida?
 *          - ¿Cómo recorrer el array uno a uno con métodos (funcion aplicada sobre el objeto) del mismo?
 *          - ¿Cómo "unir" los elementos de un array y convertirlos en una cadena?
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

let limite;
do {
  limite = parseInt(pedirDato("Introduzca el limite (entero) ?", "entero"));
} while (limite < 2);

let msg = "";
for (i = 2; i <= limite; i += 2) {
  msg += i < limite ? `${i}, ` : `${i}`;
}
console.log(msg);

// Con arrays
const numerosPares = Array.from({ length: limite }, (el, i) => i + 2).filter(
  (el) => el % 2 == 0
);
console.log(numerosPares.join(", "));
