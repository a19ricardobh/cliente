/*

   Segunda Solucion al Codigo Asincrono no bloqueante: Promesas con reject y finally

*/

console.log("Solucion Codigo Asincrono no bloqueante: Promesas");

function uno(msg) {
  return new Promise((resolve, reject) => {
    if (msg == "") {
      reject("No hay mensaje 1");
    }
    setTimeout(() => resolve(msg), 1000);
  });
}

function dos(msg) {
  return new Promise((resolve, reject) => {
    if (msg == "") {
      reject("No hay mensaje 2");
    }
    setTimeout(() => resolve(msg), 500);
  });
}

function tres(msg) {
  return new Promise((resolve, reject) => {
    if (msg == "") {
      reject("No hay mensaje 3");
    }
    setTimeout(() => resolve(msg), 750);
  });
}

uno("uno")
  .then((msg) => {
    console.log("Inicio");
    console.log(msg);
    return dos(""); // Se produce el reject de la promesa dos y salta el catch y por ultimo el finally
  })
  .then((msg) => {
    console.log(msg);
    return tres("tres");
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("Fin");
  });
