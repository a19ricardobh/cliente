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
const c1="Dabale arroz a la zorra el abad"
const c2="Dab rroz a fla zorra el abad"
//metodo clasico
/*
function esPalindromo(cadena) {
    const array=cadena.toLowerCase().replaceAll(' ','').split("")
    for (let i = 0,j=array.length-1; i <= j; i++,j--) {
        if (array[i]!=array[j]){
            return "La cadena no es un palíndromo"
        }
    }
    return "La cadena es un palíndromo"
}*/

//con metodos de array
/*
function esPalindromo(cadena) {
    const array=cadena.toLowerCase().replaceAll(' ','').split("")
    const arrayR=array.slice()
    arrayR.reverse()
    console.log(array)
    console.log(arrayR)
    if (array.toString()!==arrayR.toString()){
        return "La cadena no es un palíndromo"
    }else{
        return "La cadena es un palíndromo"
    }
}*/

//recursivo
function esPalindromo(cadena) {
    const cad=cadena.toLowerCase().replaceAll(' ','')
    
        if (cad[0]!=cad[cad.length-1])
            return false
        else {
            if (cad.length>1) 
                return esPalindromo(cad.substring(1,cad.length-1))  
            else
                return true
        }
}


console.log(esPalindromo(c1))
console.log(esPalindromo(c2))