/***************************************************************************************************************
 *
 *   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con
 *             el producto del numero de fila por el número de columna
 *
 *
 *   Entrada : nfilas, ncols (números enteros)
 *
 *
 *   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
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

function crearTabla(filas, columnas) {
  let tabla = `<table>`;
  for (i = 1; i <= filas; i++) {
    tabla += `<tr>`;
    for (j = 1; j <= columnas; j++) {
      tabla += `<td>${i * j}</td>`;
    }
    tabla += `</tr>`;
  }
  tabla += `</table>`;
  return tabla;
}

let nFilas = parseInt(pedirDato("Numero de filas:", "entero"));
let nColumnas = parseInt(pedirDato("Numero de columnas:", "entero"));

document.querySelector("#contenedor").innerHTML = crearTabla(nFilas, nColumnas);
