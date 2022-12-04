/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
 *
 *
 *   Entrada : numero1, numero2, numero3
 *
 *
 *   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
 *
 *   Nota: - Resolver de forma "clasica"
 *         - Resolver empleando el objeto Math
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

let numero1 = parseInt(pedirDato("Escriba un numero: ", "entero"));
let numero2 = parseInt(pedirDato("Escriba otro numero: ", "entero"));
let numero3 = parseInt(pedirDato("Escriba otro numero: ", "entero"));

let maximo = numero1;
if (numero2 > maximo) {
  maximo = numero2;
}
if (numero3 > maximo) {
  maximo = numero3;
}

//maximo = Math.max(numero1, numero2, numero3);

console.log(
  `El numero mayor entre ${numero1}, ${numero2} y ${numero3} es: ${maximo}`
);
