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
const texto = "Determinar en un texto el número de palabras";

const array = texto.split(" ");

console.log(texto);
console.log(`Numero de palabras: ${array.length}`);
console.log(`Primera palabra: ${array[0]}`);
console.log(`Ultima palabra: ${array[array.length - 1]}`);
console.log(`Palabras ordenadas de la a a la z: ${array.sort()}`);
console.log(`Palabras ordenadas de la z a la a: ${array.sort().reverse()}`);
