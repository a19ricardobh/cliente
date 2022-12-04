/***************************************************************************************************************
 *
 *   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
 *             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
 *
 *   Entrada : n
 *
 *
 *   Salida  : 0,1,1,2,3,5,8,13,....
 *
 *   Notas:  ¿Cómo hacerlo de forma iterativa?
 *           ¿Cómo hacerlo de forma recursiva?
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

// De forma iterativa
function fiboIter(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return "0, 1";
  }

  const resultados = [0, 1];
  i = 2;
  do {
    resultados.push(resultados[i - 1] + resultados[i - 2]);
    i++;
  } while (resultados.length < n);
  return resultados.join(", ");
}

// De forma recursiva
function fiboRecur(n) {
  const numeros = [];
  numeros.push(0);
  numeros.push(1);
  for (let i = 2; i < n; i++) {
    numeros.push(numeros[i - 1] + numeros[i - 2]);
  }
  return numeros;
}

let num = parseInt(pedirDato("Escribe un numero", "entero"));
console.log(fiboIter(num));
console.log(fiboRecur(num));
