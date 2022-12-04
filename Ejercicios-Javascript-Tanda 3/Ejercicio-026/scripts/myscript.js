/***************************************************************************************************************
 *
 *   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
 *
 *               1
 *               2 2
 *               3 3 3
 *               4 4 4 4
 *                 ...
 *               n n n n n n n (n veces)
 *
 *   Entrada : numero entero n
 *
 *
 *   Salida  : La pirámide mostrada en el objetivo del ejercicio
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

function piramide(n) {
  cadena = "";
  for (i = 1; i <= n; i++) {
    for (j = 0; j < i; j++) {
      cadena = cadena + " " + i;
    }
    cadena = cadena + "\n";
  }
  return cadena;
}

let numero;
do {
  numero = parseInt(pedirDato("Numero entero:", "entero"));
} while (numero < 1 && numero > 20);

console.log(piramide(numero));
