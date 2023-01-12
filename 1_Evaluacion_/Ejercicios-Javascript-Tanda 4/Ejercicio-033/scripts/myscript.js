/***************************************************************************************************************
 *
 *   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
 *             P.j: Dabale arroz a la zorra el abad
 *
 *
 *   Entrada : Cadena de texto
 *
 *
 *   Salida  : La cadena .... (es|no es) un palíndromo
 *             ¿Podríamos resolverlo empleando métodos de Array?
 *             ¿Podríamos resolverlo empleando recursividad?
 *
 ***************************************************************************************************************/

/*
// Metodo clasico
function esPalindromo(cadena) {
    const array=cadena.toLowerCase().replaceAll(' ','').split("")
    for (let i = 0,j=array.length-1; i <= j; i++,j--) {
        if (array[i]!=array[j]){
            return "La cadena no es un palíndromo"
        }
    }
    return "La cadena es un palíndromo"
}
*/

/*
// Con metodos de array
function esPalindromo(cadena) {
    const array=cadena.toLowerCase().replaceAll(' ','').split("")
    const arrayR=array.slice()
    arrayR.reverse()
    if (array.toString()!==arrayR.toString()){
        return "La cadena no es un palíndromo"
    }else{
        return "La cadena es un palíndromo"
    }
}
*/

// Recursivo
function esPalindromo(cadena) {
  const cad = cadena.toLowerCase().replaceAll(" ", "");
  if (cad.length == 0 || cad.length == 1) {
    return true;
  } else {
    cad.length > 1;
  }
  return (
    cad[0] == cad[cad.length - 1] &&
    esPalindromo(cad.substring(1, cad.length - 1))
  );
}

// En una funcion expresada
const isPalindrome = (cadena) =>
  cadena.toLowerCase().replaceAll(" ", "").split("").reverse().join("") ===
  cadena.toLowerCase().replaceAll(" ", "");

const cadena1 = "Dabale arroz a la zorra el abad";
const cadena2 = "Dab rroz a fla zorra el abad";

console.log(esPalindromo(cadena1));
console.log(esPalindromo(cadena2));
console.log(isPalindrome(cadena1));
