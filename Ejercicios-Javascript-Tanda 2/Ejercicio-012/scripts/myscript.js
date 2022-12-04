/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número entero n al usuario y mostramos en la consola los numeros desde 0 hasta ese numero
 *
 *
 *   Entrada : numero entero n
 *
 *
 *   Salida  : 0,1,2,3,4,5,....,n
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

let num = parseInt(pedirDato("Escriba un numero: ", "entero"));

let msg = "";
for (let i = 0; i <= num; i++) {
  msg += i < num ? `${i}, ` : `${i}`;
}
console.log(msg);

// Con arrays
//const numeros = Array.from({ length: num + 1 }, (el, i) => i);
//console.log(numeros.join(", "));
