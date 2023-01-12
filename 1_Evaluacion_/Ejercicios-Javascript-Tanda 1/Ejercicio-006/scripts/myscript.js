/***************************************************************************************************************
 *
 *   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
 *             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
 *
 *   Entrada : catetoA, catetoB
 *
 *
 *   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
 *
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

// Function expresada
//const hipotenusa=(cateto1,cateto2)=>Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2)).toFixed(2)

// Funcion declarada
function hipotenusa(cateto1, cateto2) {
  return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)).toFixed(2);
}

let catetoA = parseFloat(pedirDato("Cateto 1", "numero"));
let catetoB = parseFloat(pedirDato("Cateto 2", "numero"));

console.log(
  `La hipotenusa de un triangulo rectangulo con catetos ${catetoA} y ${catetoB} mide ${hipotenusa(
    catetoA,
    catetoB
  )}`
);
