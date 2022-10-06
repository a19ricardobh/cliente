/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : nfilas, ncols (números enteros)
*
*
*   Salida  : tabla html con nfilas y ncols. Cada celda contendrá el producto del número de fila por la columna
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

let nfilas=leerDatos("Escribe numero filas")
let ncols=leerDatos("Escribe numero columnas")

function sacarPorHTML() {
    const $contenedor=document.getElementById("contenedor")
 
    let resultado="<table>"
    for (let i=1;i<=nfilas;i++){
        resultado+="<tr>"
        for(let j=1;j<=ncols;j++){
            resultado+=`<td>${i*j}</td>`
        }
        resultado+="</tr>"
    } 
    resultado+="</table>"
    $contenedor.innerHTML=resultado
}

sacarPorHTML()