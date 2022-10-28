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
/*
//de forma iterativa
function fibonacci(n){
    let rdo=[0]
    let f=0
    while (n>=f)  {
        if (f==0){
            f++
        }else{
            f=rdo[rdo.length-1]+rdo[rdo.length-2]
        }

        if (n>=f)  rdo.push(f)
    }
    return rdo
}

console.log(fibonacci(num))*/

//de forma recursiva
let rdo=[0,1]
function fibonacci(array,n,f){
    
    while (n>=f)  {
        
        f=array[array.length-1]+array[array.length-2]
        
        
        if (n>=f){
            array.push(f)
            return fibonacci(array,num,f)
        }  
    }
    return array
}

console.log(fibonacci(rdo,num,0))

