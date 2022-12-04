/***************************************************************************************************************
 *
 *   Objetivo: Funcion que devuelve un objeto con la frecuencia de cada vocal en una frase
 *
 *
 *   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
 *
 *
 *   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
 *
 *
 *
 ***************************************************************************************************************/

const vocales = "aeiou".split("");
const cadena = "La verdad saldrá a la luz";

const nVocales = Array(5).fill(0);
for (let j = 0; j < cadena.length; j++) {
  for (let k = 0; k < 5; k++)
    if (cadena.charAt(j) == vocales[k]) {
      nVocales[k]++;
    }
}

vocales.forEach((vocal, i) =>
  console.log(`El numero de vocales ${vocal} es ${nVocales[i]}`)
);
