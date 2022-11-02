/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia/mes/año) y calcule el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12/07/1980
*                                  12/07/1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia/mes/anho
*
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*            
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (!isNaN(n)) {
            n=prompt(mensaje)
        }else {
            i=false
            return n
        }
    }while(i)
}

const fecha=leerDatos("Introduzca su fecha de nacimiento (DD/MM/AAAA)")

const array=fecha.split("/")

function numSuerte(arr){
    let suerte=0
    if (arr.length==1){
        return arr[0]
    }else{
        arr.forEach(e => {    
            suerte+=parseInt(e)
        });
        const arr1=suerte.toString().split("")
        return numSuerte(arr1)
    }
}

console.log(numSuerte(array))