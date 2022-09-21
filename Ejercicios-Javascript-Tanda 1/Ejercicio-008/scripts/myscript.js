/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/
function par(num) {
    if (num%2==0){
        return true //par
    }else{
        return false //impar
    }
}

let i=true
let n=prompt("Introducir un numero")
do{
    if (isNaN(n)) {
        n=prompt("Introducir un numero")
    }else {
        i=false
    }
}while(i)


if (par(parseInt(n))){
    alert(`El número ${parseInt(n)} es par`)
}else{
    alert(`El número ${parseInt(n)} es impar`)
}