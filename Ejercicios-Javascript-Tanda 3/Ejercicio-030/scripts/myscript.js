/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*   Notas: Métodos del objeto String
*
***************************************************************************************************************/
function leerDatos(mensaje){
    let i=true
    let n=prompt(mensaje)
    do{
        if (!isNaN(n)) {
            n=prompt(mensaje)
        }else{
            i=false
            return n
        }
    }while(i)
}

let cadena=leerDatos("Escribe una cadena de texto")
let palabra=leerDatos("Escribe una palabra")
let posiciones=[]
let pos=cadena.indexOf(palabra,0)
while (pos!=-1) {
    posiciones.push(pos)
    pos=cadena.indexOf(palabra,pos+palabra.length)
}

console.log(posiciones.toString())
