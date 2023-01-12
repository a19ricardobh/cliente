/***************************************************************************************************************
 *
 *   Objetivo: En muchas recopilaciones de problemas cada problema tiene un identificador único para poderlo
 *             referenciar de manera unívoca dentro del sistema. Los identificadores son números naturales correlativos,
 *             y el primer problema recibe el número 100. Empezar en 100, en lugar de en 1 (o en 0), no es un capricho.
 *             Los problemas se "archivan" en volúmenes, cada uno compuesto por 100 problemas. Al asignar el número 100
 *             al primer problema, es fácil saber en qué volumen está cualquier problema a partir de su identificador.
 *             En concreto, el primer volumen de problemas contiene a aquellos que tienen como identificador los números
 *             entre 100 y 199, el volumen 2 contiene los problemas con identificadores 200…299, etcétera.
 *             Dado un problema, ¿en qué volumen está?
 *
 *   Entrada : 100
 *             306
 *
 *   Salida  : El problema 100 está en el volumen 1
 *             El problema 306 está en el volumen 3
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

function volumen(problema) {
  let nVolumen = parseInt(problema / 100);
  return nVolumen;
}

let nProblema;
do {
  nProblema = parseInt(pedirDato("Problema?", "entero"));
} while (nProblema < 100);

console.log(
  `El problema ${nProblema} está en el volumen ${volumen(nProblema)}`
);
