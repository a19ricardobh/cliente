/*

   Tercera Solucion al Codigo Asincrono no bloqueante: Promesas con async/await

*/

/*
   Permite que el código sea más lineal con una estructura típica try-catch, haciendo que el código 
   se parezca a código con forma "síncrona"

   Para poder emplear una función await es necesario emplear el async en la definicion de la función

*/

console.log("Solucion Codigo Asincrono no bloqueante: Promesas y async/await");

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

async function ejecutar() {
  try {
    console.log("Inicio");
    let miPromesa = await uno("uno");
    console.log(miPromesa);
    miPromesa = await dos("");
    console.log(miPromesa);
    miPromesa = await tres("tres");
    console.log(miPromesa);
    console.log("Fin");
  } catch (error) {
    console.log(error);
  }
}

ejecutar();
