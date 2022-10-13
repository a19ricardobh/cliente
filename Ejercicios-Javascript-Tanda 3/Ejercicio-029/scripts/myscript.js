/***************************************************************************************************************
*  
*   Objetivo: n es pandigital si contiene al menos una vez todos los digitos del 0 al 9
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let h='90465451654'
let u='9042653451657488'

function pandigital(n){
   // let m='0123456789'
    let i=0
    let a=Array.from(n)

    while(i<=9){
        if(!(a.includes(i.toString()))) 
            return false
        i++
    }
    return true
}

//let digitos="0123456789".split("")
//digitos.every(el=>h.split("").includes(el))

console.log(pandigital(h)) //falso
console.log(pandigital(u)) //true