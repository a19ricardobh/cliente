/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores, empezando con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,2,3,5,8,13,....
*
*   Notas:  ¿Cómo hacerlo de forma iterativa?
*           ¿Cómo hacerlo de forma recursiva?
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

function fibonacci(n){
    let rdo=[0]
    let f=1
    while (n>f) {
        //console.log(rdo.length)
        if (f==1){
            f=rdo[rdo.length-1]+rdo[rdo.length-2]
        }
        console.log(f)
        rdo.push(f)
    }
    return rdo
}

console.log(fibonacci(num))
