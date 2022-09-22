/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*   Nota: - Resolver de forma "clasica"
*         - Resolver empleando el objeto Math
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n)) {
            n=prompt(mensaje)
        }else {
            i=false
            return parseInt(n)
        }
    }while(i)
}

let n1=leerDatos("Escribe el primer numero")
let n2=leerDatos("Escribe el segundo numero")
let n3=leerDatos("Escribe el tercer numero")
/*
let mayor=n1

if (n2>mayor){
    mayor=n2
}
if (n3>mayor){
    mayor=n3
}
*/
let mayor=Math.max(n1, n2, n3)

alert(`El mayor de ${n1}, ${n2} y ${n3} es : ${mayor}`)

