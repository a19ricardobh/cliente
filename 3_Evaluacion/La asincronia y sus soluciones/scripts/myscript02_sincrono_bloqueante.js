/*
   Código síncrono bloqueante. 

   Según se escribe se va ejecutando y se realiza la ejecución. 
   En javascript sólo hay un hilo de ejecución (single thread), por lo que cuando se llama a la función "dos" desde la
   función "uno", se para la ejecución de ésta (se bloquea), se ejecuta la función "dos" y cuando finaliza, se vuelve a
   la función "uno". Cuando finaliza, se vuelve al programa principal 

*/

console.log("Codigo Sincrono Bloqueante");
console.log("Inicio");

function dos(mesg) {
  console.log("uno");
}

function uno(msg) {
  console.log(msg);
  dos("dos");
  console.log("tres");
}

uno("uno");
console.log("Fin");
