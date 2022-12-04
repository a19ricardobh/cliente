/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número (positivo o negativo) tras otro al usuario hasta que ingresamos el número 0 (que no se tendrá en cuenta)
 *             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
 *
 *   Entrada : numero1, numero2, numero3,.....
 *
 *
 *   Salida  : El mayor de numero1, numero2, numero3,....
 *
 *   Nota:   : ¿Es necesario almacenar los números en un array?
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

let numero = parseInt(pedirDato("Numero (0 para salir)", "entero"));
let numeros = [];
while (numero != 0) {
  numeros.push(numero);
  numero = parseInt(pedirDato("Numero (0 para salir)", "entero"));
}
console.log(`El mayor de ${numeros.join(", ")} es ${Math.max(...numeros)}`);
