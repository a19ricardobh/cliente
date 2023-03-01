/* ***************************************************************************************

   Código asíncrono no bloqueante. 

   Cuando hay alguna función asíncrona (petición de datos a un servidor mediante AJAX, setTimeout, operaciones I/O, etc), Javascript actua 
   de forma no bloqueante, no se puede determinar el orden de ejecución y se pueden producir efectos indeseados. 
   Por ejemplo, si pedimos datos al servidor (operación asíncrona) y después necesitamos mostrar esos datos, no podemos hacerlo hasta estar
   seguros de que ya tenemos los datos.

* ***************************************************************************************/

/* 
Al ejecutarse la función "uno" no sabemos cuando se obtendrá el resultado ya que la operacion setTimeout es asíncrona,
pero al actuar Javascript de forma no bloqueante con este tipo de operaciones, se ejecutarán las siguientes instrucciones,
por lo que se puede mostrar "dos" antes que "uno".
Esto puede ser un problema cuando se trata de peticiones de datos a un servidor, ya que no podríamos ejecutar las
instrucciones de mostrar en la página HTML la información hasta estar seguros de que ya la tenemos antes.
*/

console.log("Codigo Asincrono no bloqueante");
console.log("Inicio");

function dos(msg) {
  setTimeout(() => console.log(msg), 500);
}

function uno(msg) {
  setTimeout(() => console.log(msg), 1000);
  dos("dos");
}

uno("uno");
console.log("Fin");
