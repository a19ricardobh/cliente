/*

   Segunda Solucion al Codigo Asincrono no bloqueante: Promesas

   Las promesas son objetos que pueden tener tres estados: pendiente, aceptada o rechazada.
   Mientras no se obtiene un resultado, la promesa está pendiente. Una vez se obtiene un resultado,
   (se acepta o rechaza) y se ejecutará la callback correspondiente.

*/

/*
resolve y reject son dos callbacks:
- resolve se ejecutará cuando se obtienen los resultados correctamente
- reject se ejecutará si se rechaza la promesa (en caso de error, normalmente)
*/

console.log("Solucion Codigo Asincrono no bloqueante: Promesas");

function uno(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(msg), 1000);
  });
}

function dos(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(msg), 500);
  });
}

function tres(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(msg), 750);
  });
}

uno("uno")
  .then((msg) => {
    console.log("Inicio");
    console.log(msg);
    return dos("dos");
  })
  .then((msg) => {
    console.log(msg);
    return tres("tres");
  })
  .then((msg) => {
    console.log(msg);
    console.log("Fin");
  });
