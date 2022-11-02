/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
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

function numAleatorio(n){
    const array=[]
    while (n>0) {
        array.push(parseInt(Math.random()*100))
        n--
    }
    return array
}

console.log(numAleatorio(num))