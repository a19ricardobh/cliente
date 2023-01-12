/***************************************************************************************************************
 *
 *   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
 *             por una pandemia
 *
 *   Entrada : segundos
 *
 *
 *   Salida  : Mensaje tal como: "Hemos estado confinados A semana/s, B día/s, C hora/s, D minuto/s, E segundo/s"
 *             Para 183901 segundos la salida sería: "Hemos estado confinados 0 semanas, 2 días, 3 horas, 5 minutos, 1 segundo"
 *
 *   Nota: Emplear una funcion
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

function tiempototal1(seg) {
  semanas = Math.floor(seg / 60 / 60 / 24 / 7);
  seg = seg - semanas * 7 * 24 * 60 * 60;
  dias = Math.floor(seg / 60 / 60 / 24);
  seg = seg - dias * 24 * 60 * 60;
  horas = Math.floor(seg / 60 / 60);
  seg = seg - horas * 60 * 60;
  minutos = Math.floor(seg / 60);
  seg = seg - minutos * 60;
  let tiempo = `Hemos estado confinados ${semanas} semana/s, ${dias} día/s, ${horas} hora/s, ${minutos} minuto/s, ${seg} segundo/s`;
  return tiempo;
}

function tiempototal2(seg) {
  const SEMANA = 7 * 24 * 60 * 60; // segundos en una semana
  const DIA = 24 * 60 * 60; // segundos en un dia
  const HORA = 60 * 60; // segundos en una hora
  const MINUTO = 60; // segundos en un minuto

  const resultado = [];
  resultado.push(seg);
  const salida = ["semana/s", "dia/s", "hora/s", "minuto/s"];
  const segundos = [SEMANA, DIA, HORA, MINUTO];
  for (let i = 0; i < segundos.length; i++) {
    resultado.push(resultado[resultado.length - 1] % segundos[i]);
    resultado[i] = parseInt(resultado[resultado.length - 2] / segundos[i]);
    salida[i] = `${resultado[i]} ${salida[i]}`;
  }
  salida.push(`${resultado[resultado.length - 1]} segundos`);
  return `Hemos estado confinados ${salida.join(",")}`;
}

let segundos = parseInt(pedirDato("Numero de segundos?", "entero"));
console.log(tiempototal1(segundos));
console.log(tiempototal2(segundos));
