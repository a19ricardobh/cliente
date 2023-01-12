/***************************************************************************************************************
 *
 *   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
 *             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
 *             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
 *             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
 *             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
 *             Celsius = (5/9) * (Fahrenheit-32)
 *
 *   Entrada : Número decimal
 *
 *
 *   Salida  : Númeero decimal (2 dígitos como máximo en la parte decimal)
 *             Ejemplo: Fahrenheit=100, Celsius=38.33
 *
 *   Notas: Emplear una funcion con un parámetro
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

// Funcion expresada
//const tempCent=(tf)=> ((5/9) * (tf-32)).toFixed(2)

// Funcion declarada
function tempCent(tf) {
  return ((5 / 9) * (tf - 32)).toFixed(2);
}

let tempFahren = parseFloat(pedirDato("Temperatura Fahrenheit", "numero"));
console.log(
  `${tempFahren} grados Fahrenheit equivalen a ${tempCent(
    tempFahren
  )} grados centigrados`
);
