/***************************************************************************************************************
 *
 *   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
 *
 *   Entrada : una cadena
 *
 *   Salida  : Se muestra el texto(cadena) introducido por el usuario
 *             Número de palabras: XXX
 *             Primera palabra: YYYYY
 *             Última palabra: ZZZZZ
 *             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
 *             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW
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

let cadena = pedirDato("Introduce una cadema", "cadena")
  .toLocaleLowerCase()
  .split(" ")
  .filter((el) => el != "")
  .join(" ");

console.log(
  `El numero de palabras en la cadena es: ${cadena.split(" ").length}`
);

console.log(`La primera palabra de la cadena es: ${cadena.split(" ")[0]}`);
console.log(
  `La ultima palabra de la cadena es: ${
    cadena.split(" ")[cadena.split(" ").length - 1]
  }`
);

console.log(
  `Las palabras ordenadas de la a a la z: ${cadena.split(" ").sort().join(" ")}`
);

console.log(
  `Las palabras ordenadas de la z a la a: ${cadena
    .split(" ")
    .sort()
    .reverse()
    .join(" ")}`
);
