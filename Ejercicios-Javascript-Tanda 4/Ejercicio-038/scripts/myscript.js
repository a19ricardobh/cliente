/***************************************************************************************************************
 *
 *   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
 *             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
 *             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
 *
 *   Entrada : dia/mes/anho
 *
 *
 *   Salida  : La fecha dia/mes/anho (es|no es) correcta
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
    if (tipo == "flotante") centine;
    la = !isNaN(dato) && !Number.isInteger(parseFloat(dato)) ? true : false;
    if (tipo == "numero") centinela = !isNaN(dato) ? true : false;
  } while (!centinela);
  return dato;
}

function bisiesto(anho) {
  return (anho % 400 === 0 && anho % 100 !== 0) || anho % 4 === 0;
}

let anho;
let mes;
do {
  anho = parseInt(pedirDato("Dame el anho", "entero"));
} while (anho < 1000 || anho > 2300);

do {
  mes = pedirDato("Dame el mes", "entero");
} while (mes < 1 || mes > 12);

let dia;
do {
  do {
    dia = parseInt(pedirDato("Dame el dia", "entero"));
  } while (dia < 1 || dia > 31);
  let fecha = new Date(anho, mes - 1, dia - 1);
  if (fecha.getMonth() + 1 != mes) {
    alert("Ese dia no existe en el calendario");
  }
} while (fecha.getMonth() + 1 != mes);
console.log(`La fecha ${dia}\\${mes}\\${anho} es correcta`);

let salida = "";
switch (mes) {
  case (3, 7, 9, 11):
    salida = dia < 31 ? "es correcta" : "no es correcta";
    break;
  case 2:
    salida = bisiesto(anho) && dia < 30 ? "es correcta" : "no es correcta";
    break;
  default:
    salida = "es correcta";
}
console.log(`La fecha ${dia}\\${mes}\\${anho} ` + salida);

/*
const fechaCorrecta = (dia, mes, anho) =>
  new Date(anho, mes - 1, dia).getMonth() == mes - 1 ? "es" : "no es";
*/
