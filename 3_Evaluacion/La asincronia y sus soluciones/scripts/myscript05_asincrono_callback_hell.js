/*

   Vemos el caso en que tengamos tres operaciones asíncronas, para ententer el "callback hell"

*/

console.log("Solucion Codigo Asincrono no bloqueante: Callbacks");

function tres(msg, callback3) {
  setTimeout(() => callback3(msg), 750);
}

function dos(msg, callback2) {
  setTimeout(() => callback2(msg), 500);
}

function uno(msg, callback1) {
  setTimeout(() => callback1(msg), 1000);
}

uno("uno", (msg) => {
  console.log("Inicio");
  console.log(msg);
  dos("dos", (msg) => {
    console.log(msg);
    tres("tres", (msg) => {
      console.log("tres");
      console.log("Fin");
    });
  });
});
