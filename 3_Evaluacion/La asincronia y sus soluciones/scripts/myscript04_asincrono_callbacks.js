/* ***************************************************************************************

   Primera Solucion al Codigo Asincrono no bloqueante: Callbacks

   Se emplean callbacks, funciones que son parámetros de otras funciones.
   En este ejemplo, la funcion callback1 y callback2 son:

   function callback1(msg) {
      console.log("Inicio");
      console.log(msg);
      dos("dos", (msg) => {
        console.log(msg);
        console.log("Fin");
     });
   }

   function callback2(msg) {
      console.log(msg);
      console.log("Fin"); 
   }

   El inconveniente de esta solución es que si tenemos varias operaciones asícronas, vamos a
   tener que llamar dentro de una callback, callback1, a otra callback, callback2. Si en nuestro
   código tenemos más llamadas asícronas, entonces el código se vuelve literalmente un "infierno".
   Por eso recibe el nombre de "callback hell"

* ***************************************************************************************/

console.log("Solucion Codigo Asincrono no bloqueante: Callbacks");

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
    console.log("Fin");
  });
});
