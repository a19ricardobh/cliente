/***************************************************************************************************************
 *
 *   Objetivo: Solicitamnos un número entero n positivo. Si n es par, se divide por 2 y su n es
 *             impar se multiplica por tres y suma uno. El proceso se repite hasta que n tenga el valor de 1.
 *             Por ejemplo, la secuencia para n=3 será:
 *
 *                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
 *
 *   Entrada : numero entero n entre 1 y 100
 *
 *
 *   Salida  : La secuencia de valores obtenida tal cual figura en el objetivo
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

/*
function Collatz(n) {
    console.log(n)
    if (n==1) return 
    if (n%2) 
        return Collatz(3*n+1)
    else 
        return Collatz(n/2)
}
Collatz(leerEntero())
*/

/*
let resultado=[]
function Collatz2(n) {
    resultado.push(n)
    if (n==1) return 
    if (n%2) 
        return Collatz2(3*n+1)
    else 
        return Collatz2(n/2)
}
Collatz2(leerEntero())
console.log(resultado.join("-->"))
*/

/*
function Collatz3(n,resultado=[]) {
    resultado.push(n)
    if (n==1) return resultado
    if (n%2) 
        return Collatz3(3*n+1,resultado)
    else 
        return Collatz3(n/2,resultado)
}
console.log(Collatz3(leerEntero()).join("-->"))
*/

// Iterativa
function Collatz4(n) {
  let salida = `${n}`;
  while (n !== 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    salida = n % 2 ? salida + `-->${3 * n + 1}` : salida + `-->${n / 2}`;
  }
  console.log(salida + "-->" + n);
}

Collatz4(parseInt(pedirDato("n", "entero")));
