/***************************************************************************************************************
 *
 *   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores.
 *             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
 *
 *   Entrada : numero     1 <= numero <= 9
 *
 *   Salida  : 1 x numero = numero
 *             2 x numero = ....
 *             3 x numero = ....
 *                   ....
 *             9 x numero = ....
 *
 *   Nota:  * Mostraremos el resultado de dos formas:
 *            - En la consola del navagador, empleando template strings
 *            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
 *          * Declararemos y emplearemos funciones
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

let num;
do {
  num = parseInt(pedirDato("Escriba un numero: ", "entero"));
} while (num > 9 || num < 1);

resultadoConsola = "";
resultadoHTML = "<table>";
for (let i = 1; i < 10; i++) {
  resultado = num * i;
  resultadoConsola += `${i} x ${num} = ${resultado} \n`;
  resultadoHTML += `<tr><td>${i}</td><td>x</td><td>${num}</td><td>=</td><td>${resultado}</td><tr>`;
}
resultadoHTML += "</table>";
console.log(resultadoConsola);

document.querySelector("#tabla").innerHTML = resultadoHTML;
