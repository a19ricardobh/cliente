/***************************************************************************************************************
 *
 *   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
 *             según la siguiente tabla
 *
 *                Cualificación    Porcentaje
 *                     A             90-100
 *                     B             80-90
 *                     C             70-79
 *                     D             60-69
 *                     F             0-59
 *
 *   Entrada : nota
 *
 *
 *   Salida  : El examen se cualifica con un XXX
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

function calificacion(porcentaje) {
  switch (true) {
    case porcentaje >= 90 && porcentaje <= 100:
      return "A";
      break;
    case porcentaje >= 80:
      return "B";
      break;
    case porcentaje >= 70:
      return "C";
      break;
    case porcentaje >= 60:
      return "D";
      break;
    case porcentaje < 60 && porcentaje >= 0:
      return "F";
      break;
    default:
      return false;
  }
}

let porcentaje = parseFloat(pedirDato("Porcentaxe de acierto:", "numero"));
msg = calificacion(porcentaje)
  ? `El examen se cualifica con un ${calificacion(porcentaje)}`
  : `El porcentaje tiene que estar entre 0 y 100, ambos incluidos`;
console.log(msg);
