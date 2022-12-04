/***************************************************************************************************************
 *
 *   Objetivo: Crear un objeto persona con nombre y edad y un metodo que determine si es mayor o no de edad
 *
 *
 *   Entrada :
 *
 *
 *   Salida  :
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

let nombre = pedirDato("Nombre de la persona: ", "cadena");
let edad = parseInt(pedirDato("Edad de la persona: ", "entero"));

const persona = {
  nombre,
  edad,
  mayor() {
    return this.edad >= 18;
  },
};

resultado = persona.mayor()
  ? `${persona.nombre} es mayor de edad`
  : `${persona.nombre} es menor de edad`;
console.log(`${resultado}`);
