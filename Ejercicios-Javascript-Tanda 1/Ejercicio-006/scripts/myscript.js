/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/

function leerDato(mensaje,tipo) {
    let i=true
    let c=prompt(mensaje)   
    do{
        if (isNaN(c) && typeof tipo=="string") {
            c=prompt(mensaje)
        }else {
            i=false
            return c
        }
    }while(i)

}

let ca=leerDato("Valor cateto A:","number")
let cb=leerDato("Valor cateto B:","number")

let h=Math.sqrt(ca*ca+cb*cb).toFixed(2)
//let h=Math.sqrt(Math.pow(ca,2)+Math.pow(cb,2)).toFixed(2)

alert(`La hipotenusa del triángulo con catetos ${ca} y ${cb} es ${h} `)