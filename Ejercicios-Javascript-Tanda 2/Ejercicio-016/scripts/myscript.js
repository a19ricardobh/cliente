/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos de forma repetida un número entero entre 1 y 9 mientras no esté entre esos valores. 
*             Cuando el número esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 <= numero <= 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota:  * Mostraremos el resultado de dos formas:
*            - En la consola del navagador, empleando template strings
*            - En el documento HTML, formateando la salida empleando una tabla con 5 columnas y nueve filas
*          * Declararemos y emplearemos funciones
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (isNaN(n) || (n>9 || n<1)) {
            n=prompt(mensaje)
        }else{
            i=false
            return parseInt(n)
        }
    }while(i)
}

let num=leerDatos("Escribe un numero entre 1 y 9")

function sacarPorConsola() {
    for (let i=1;i<=9;i++) 
        console.log(`${i} x ${num} = ${i*num}`)
}

function sacarPorHTML() {
    const $contenedor=document.getElementById("contenedor")
 
    let resultado="<table>"
    for (let i=1;i<=9;i++) 
        resultado+=`<tr><td>${i}</td><td> x </td><td>${num}</td> <td>=</td><td> ${i*num}</td></tr>`
    resultado+="</table>"
    $contenedor.innerHTML=resultado
}

sacarPorConsola()
sacarPorHTML()
