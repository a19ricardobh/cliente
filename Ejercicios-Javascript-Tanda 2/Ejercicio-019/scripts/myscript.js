/***************************************************************************************************************
*  
*   Objetivo: Eliminar caracteres expeciales de una cadena. Se permiten 
*             guion, subrayado y espacios
*
*
*
*   Entrada : cadena
*
*
*   Salida  : cadena sin . ! @ # $ % & \ * ( )
*
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

let c=leerDatos("Escribe una cadena de caracteres")

function cadenaSin(texto){
    let rdo=""
    const cadena=[".", "!", "@" ,"#", "$", "%", "&" , '\/' , "*" , "(" , ")"]
    
    Array.from(texto).forEach(e => {
        if (!cadena.includes(e)){
            rdo+=e
        }
    })
    return rdo
}

console.log(cadenaSin(c))