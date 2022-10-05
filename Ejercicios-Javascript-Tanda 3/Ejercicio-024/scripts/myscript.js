/***************************************************************************************************************
*  
*   Objetivo: n es automorfico si su cuadrado termina en n
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n)) {
            n=prompt(mensaje)
        }else{
            i=false
            return parseInt(n)
        }
    }while(i)
}

let num=leerDatos("Escribe un numero")

function isAutomorfico(n){
    let m=(n*n).toString()
    return m.slice(-n.toString().length)==n.toString()
}

console.log(isAutomorfico(num)?"Es automorfico":"No es automorfico")

