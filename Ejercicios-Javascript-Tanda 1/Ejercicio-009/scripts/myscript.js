/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
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

let nCaramelos=leerDatos("Introduce numero de caramelos")
let nPeques=leerDatos("Introduce numero de niños")

let tocan=parseInt(nCaramelos/nPeques)
let sobran=nCaramelos%nPeques
alert(`El número de caramelos por niño es: ${tocan}
                  El número de caramelos que sobran es: ${sobran} `)