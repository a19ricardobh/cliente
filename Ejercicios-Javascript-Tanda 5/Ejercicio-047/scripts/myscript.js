/***************************************************************************************************************
 *
 *   Objetivo: Devolver el salto mas largo entre elementos de la version ordenada de un array
 *
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
 *
 *
 ***************************************************************************************************************/
array = [23, 56, 7, 85, 12, 125, 46, 102];
let i = 0;

array.sort(function (a, b) {
  return a - b;
});

let difMayor = 0;
let posInicial = 0;
let posFinal = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i + 1] - array[i] > difMayor) {
    difMayor = array[i + 1] - array[i];
    posInicial = array[i];
    posFinal = array[i + 1];
  }
}

console.log(
  `El salto más lago es ${difMayor}, que corresponde a los numeros ${posInicial} y ${posFinal}`
);
