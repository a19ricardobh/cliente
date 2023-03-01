/*
   Código síncrono. 

   Según se escribe se va ejecutando y se realiza la ejecución

*/
console.log("Ejemplo de Codigo Sincrono");

console.log("Inicio");

function dos(msg) {
  console.log(msg);
}

function uno(msg) {
  console.log(msg);
}

uno("uno");
dos("dos");
console.log("Fin");
